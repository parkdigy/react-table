import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Table as MuiTable, TableBody, TableRow, TableCell, Paper, Stack, TableFooter, Icon, Box } from '@mui/material';
import SimpleBarCore from 'simplebar-core';
import { useResizeDetector } from 'react-resize-detector';
import { TableProps, TableCommands, TableColumn, TableItem } from './Table.types';
import { StyledBodyRow, StyledNoDataDiv } from './Table.styles.private';
import { TableHeadCellCommands } from '../TableHeadCell';
import TableFooterCell from '../TableFooterCell';
import TablePagination from '../TablePagination';
import { useAutoUpdateLayoutState } from '@pdg/react-hook';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import TableContextProvider from '../TableContextProvider';
import { TableBodyCellCommands } from '../TableBodyCell';
import TableTopHead from '../TableTopHead';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { makeSortableItems } from './Table.function.private';
import { TableSortableBody } from '../TableSortableBody';

function columnFilter<T>(v: T | undefined | null | false): v is T {
  return v !== undefined && v !== null && v !== false;
}

type TLocalBodyData = Record<
  string | number,
  {
    item: TableItem;
    columns: Record<
      string,
      {
        column: TableColumn;
        checked: boolean;
        checkDisabled: boolean;
        commands?: TableBodyCellCommands;
      }
    >;
  }
>;

type TLocalHeaderData = Record<string, { column: TableColumn; checked: boolean; commands?: TableHeadCellCommands }>;

interface WithForwardRefType<T = TableItem> extends React.FC<TableProps<T>> {
  <T = TableItem>(props: TableProps<T> & React.RefAttributes<TableCommands<T>>): ReturnType<React.FC<TableProps<T>>>;
}

let _columnId = 0;

const Table: WithForwardRefType = React.forwardRef<TableCommands, TableProps>(
  (
    {
      className,
      style: initStyle,
      sx,
      caption,
      topHeadRows,
      columns: initColumns,
      items: initItems,
      paging: initPaging,
      pagingAlign = 'center',
      defaultAlign = 'left',
      defaultEllipsis,
      stickyHeader: initStickyHeader,
      height,
      minHeight,
      maxHeight,
      fullHeight,
      showOddColor,
      showEvenColor,
      cellPadding = 13,
      footer,
      noData,
      pagination,
      sortable,
      progressiveVisible,
      onClick,
      onGetBodyRowClassName,
      onGetBodyRowStyle,
      onGetBodyRowSx,
      onGetBodyColumnClassName,
      onGetBodyColumnStyle,
      onGetBodyColumnSx,
      onPageChange,
      onSortChange,
      onCheckChange,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const localHeaderDataRef = useRef<TLocalHeaderData>({});
    const localBodyDataRef = useRef<TLocalBodyData>({});
    const updateHeadCheckTimer = useRef<NodeJS.Timeout>(undefined);
    const fireOnCheckChangeTimer = useRef<Record<string, NodeJS.Timeout | undefined>>({});
    const simpleBarRef = useRef<SimpleBarCore>(null);
    const finalColumnsIdRef = useRef<string[] | undefined>([]);

    /********************************************************************************************************************
     * sortable
     * ******************************************************************************************************************/

    const sensors = useSensors(
      useSensor(MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
          distance: 10,
        },
      }),
      useSensor(TouchSensor, {
        // Press delay of 250ms, with tolerance of 5px of movement
        activationConstraint: {
          delay: 250,
          tolerance: 5,
        },
      }),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<string | undefined>(undefined);
    const [columns, setColumns] = useAutoUpdateLayoutState<TableProps['columns']>(initColumns);
    const [finalColumns, setFinalColumns] = useState<TableColumn[]>();
    const [items, setItems] = useAutoUpdateLayoutState<TableProps['items']>(initItems);
    const [sortableItems, setSortableItems] = useState<(TableItem & { id: number | string })[]>();
    const [paging, setPaging] = useAutoUpdateLayoutState<TableProps['paging']>(initPaging);

    /********************************************************************************************************************
     * containerHeight
     * ******************************************************************************************************************/

    const [containerHeight, setContainerHeight] = useState<number | undefined>();

    const { ref: containerHeightDetector } = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize() {
        if (containerHeightDetector.current) {
          setContainerHeight(containerHeightDetector.current.getBoundingClientRect().height);
        } else {
          setContainerHeight(undefined);
        }
      },
    });

    /********************************************************************************************************************
     * footerHeight
     * ******************************************************************************************************************/

    const [pagingHeight, setPagingHeight] = useState<number | undefined>();

    const { ref: pagingHeightResizeDetector } = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize() {
        if (pagingHeightResizeDetector.current) {
          setPagingHeight(pagingHeightResizeDetector.current.getBoundingClientRect().height);
        } else {
          setPagingHeight(undefined);
        }
      },
    });

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const getFinalColumnId = useCallback(
      (column: TableColumn) => {
        if (finalColumns && finalColumnsIdRef.current) {
          const idx = finalColumns.indexOf(column);
          return finalColumnsIdRef.current[idx];
        } else {
          return '';
        }
      },
      [finalColumns]
    );

    const updateHeadCheck = useCallback(
      (column: TableColumn) => {
        if (updateHeadCheckTimer.current) {
          clearTimeout(updateHeadCheckTimer.current);
          updateHeadCheckTimer.current = undefined;
        }

        const columnId = getFinalColumnId(column);

        const headColumnData = localHeaderDataRef.current[columnId];
        if (headColumnData) {
          updateHeadCheckTimer.current = setTimeout(() => {
            updateHeadCheckTimer.current = undefined;

            const enabledCheckExists = !!Object.keys(localBodyDataRef.current).find((key) => {
              const columnData = localBodyDataRef.current[key].columns[columnId];
              if (columnData) {
                if (!columnData.checkDisabled) {
                  return true;
                }
              }
            });

            const allChecked =
              enabledCheckExists &&
              !Object.keys(localBodyDataRef.current).find((key) => {
                const columnData = localBodyDataRef.current[key].columns[columnId];
                if (columnData) {
                  if (!columnData.checkDisabled) {
                    return !columnData.checked;
                  }
                }
              });

            headColumnData.commands?.setCheckDisabled(!enabledCheckExists);
            headColumnData.commands?.setChecked(allChecked);
          }, 100);
        }
      },
      [getFinalColumnId]
    );

    const getChecked = useCallback((itemKey: string, itemValue: any, columnId: string): boolean => {
      let checked = false;
      Object.keys(localBodyDataRef.current).find((key) => {
        const itemData = localBodyDataRef.current[key];
        if (itemData.item[itemKey] === itemValue) {
          const columnData = itemData.columns[columnId];
          checked = !!columnData?.checked;
          return true;
        }
      });
      return checked;
    }, []);

    const setChecked = useCallback(
      (itemKey: string, itemValue: any, columnId: string, checked: boolean) => {
        Object.keys(localBodyDataRef.current).find((key) => {
          const itemData = localBodyDataRef.current[key];
          if (itemData.item[itemKey] === itemValue) {
            const columnData = itemData.columns[columnId];
            if (columnData) {
              columnData.commands?.setChecked(checked);
              updateHeadCheck(columnData.column);
            }
            return true;
          }
        });
      },
      [updateHeadCheck]
    );

    const toggleChecked = useCallback(
      (itemKey: string, itemValue: any, columnId: string) => {
        Object.keys(localBodyDataRef.current).forEach((key) => {
          const itemData = localBodyDataRef.current[key];
          if (itemData.item[itemKey] === itemValue) {
            const columnData = itemData.columns[columnId];
            if (columnData) {
              columnData.commands?.setChecked(!columnData.checked);
              updateHeadCheck(columnData.column);
            }
            return true;
          }
        });
      },
      [updateHeadCheck]
    );

    const setCheckedAll = useCallback((columnId: string, checked: boolean) => {
      Object.keys(localBodyDataRef.current).forEach((key) => {
        const itemData = localBodyDataRef.current[key];
        const columnData = itemData.columns[columnId];
        if (columnData) {
          columnData.commands?.setChecked(checked);
        }
      });
      localHeaderDataRef.current[columnId]?.commands?.setChecked(checked);
    }, []);

    const getCheckedItems = useCallback((columnId: string): TableItem[] => {
      const checkedItems: TableItem[] = [];
      Object.keys(localBodyDataRef.current).forEach((key) => {
        const itemData = localBodyDataRef.current[key];
        const columnData = itemData.columns[columnId];
        if (columnData) {
          if (columnData.checked) {
            checkedItems.push(itemData.item);
          }
        }
      });
      return checkedItems;
    }, []);

    const stopHeadCheckTimer = useCallback(() => {
      if (updateHeadCheckTimer.current) {
        clearTimeout(updateHeadCheckTimer.current);
        updateHeadCheckTimer.current = undefined;
      }
    }, []);

    const clearFireOnCheckChangeTimer = useCallback(() => {
      Object.keys(fireOnCheckChangeTimer.current).forEach((key) => {
        if (fireOnCheckChangeTimer.current[key]) {
          clearTimeout(fireOnCheckChangeTimer.current[key]);
        }
      });
      fireOnCheckChangeTimer.current = {};
    }, []);

    const fireOnCheckChange = useCallback(
      (columnId: string) => {
        if (fireOnCheckChangeTimer.current[columnId]) {
          clearTimeout(fireOnCheckChangeTimer.current[columnId]);
          fireOnCheckChangeTimer.current[columnId] = undefined;
        }
        if (onCheckChange) {
          fireOnCheckChangeTimer.current[columnId] = setTimeout(() => {
            fireOnCheckChangeTimer.current[columnId] = undefined;

            onCheckChange && onCheckChange(columnId, getCheckedItems(columnId));
          }, 100);
        }
      },
      [getCheckedItems, onCheckChange]
    );

    const simpleBarScrollToTop = useCallback(() => {
      simpleBarRef.current?.getScrollElement()?.scrollTo({ top: 0 });
    }, []);

    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/

    useEffect(() => {
      return () => {
        stopHeadCheckTimer();
        clearFireOnCheckChangeTimer();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      stopHeadCheckTimer();
      clearFireOnCheckChangeTimer();

      Object.keys(localHeaderDataRef.current).forEach((key) => {
        if (localHeaderDataRef.current[key].column.type === 'check') {
          localHeaderDataRef.current[key].commands?.setChecked(false);
        }
      });

      Object.keys(localBodyDataRef.current).forEach((key) => {
        Object.keys(localBodyDataRef.current[key].columns).forEach((cKey) => {
          localBodyDataRef.current[key].columns[cKey].commands?.setChecked(false);
        });
      });

      setSortableItems(makeSortableItems(items));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    useEffect(() => {
      stopHeadCheckTimer();
      clearFireOnCheckChangeTimer();

      const newFinalColumns = columns?.filter(columnFilter);
      setFinalColumns(newFinalColumns);
      finalColumnsIdRef.current = newFinalColumns?.map((col) => {
        if (col.id) {
          return col.id;
        } else {
          _columnId += 1;
          return `$c$${_columnId}$`;
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns]);

    useLayoutEffect(() => {
      clearFireOnCheckChangeTimer();

      if (sortableItems) {
        localBodyDataRef.current = sortableItems.reduce<TLocalBodyData>((res, item) => {
          res[item.id] = {
            item,
            columns: {},
          };

          if (finalColumns) {
            finalColumns.forEach((c) => {
              const columnId = getFinalColumnId(c);

              if (localBodyDataRef.current[item.id]?.columns[columnId]) {
                res[item.id].columns[columnId] = localBodyDataRef.current[item.id].columns[columnId];
              } else {
                res[item.id].columns[columnId] = {
                  column: c,
                  checked: false,
                  checkDisabled: false,
                };
              }
            });
          }
          return res;
        }, {});
      } else {
        localBodyDataRef.current = {};
      }
    }, [sortableItems, finalColumns, clearFireOnCheckChangeTimer, getFinalColumnId]);

    useLayoutEffect(() => {
      if (finalColumns) {
        localHeaderDataRef.current = finalColumns.reduce<TLocalHeaderData>((res, c) => {
          res[getFinalColumnId(c)] = { column: c, checked: false };
          return res;
        }, {});
      } else {
        localHeaderDataRef.current = {};
      }
    }, [finalColumns, getFinalColumnId]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

    useLayoutEffect(() => {
      if (ref) {
        let lastColumns = columns;
        let lastItems = items;
        let lastPaging = paging;

        const commands: TableCommands = {
          getColumns: () => lastColumns,
          setColumns: (columns) => {
            lastColumns = columns;
            setColumns(lastColumns);
          },
          getItems: () => lastItems,
          setItems: (items) => {
            lastItems = items;
            setItems(items);
          },
          getPaging: () => lastPaging,
          setItemsPaging: (items, paging) => {
            lastItems = items;
            lastPaging = paging;
            setItems(lastItems);
            setPaging(lastPaging);
          },
          resetSort() {
            setSortableItems(makeSortableItems(lastItems));
          },
          getCheckedItems,
          getChecked,
          setChecked,
          toggleChecked,
          setCheckedAll,
          scrollToTop: simpleBarScrollToTop,
        };

        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
    }, [
      ref,
      columns,
      items,
      paging,
      setColumns,
      setItems,
      setPaging,
      getCheckedItems,
      simpleBarScrollToTop,
      setChecked,
      toggleChecked,
      getChecked,
      setCheckedAll,
    ]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleDragEnd = useCallback(
      (event: DragEndEvent) => {
        const { active, over } = event;

        if (active && over) {
          setSortableItems((items) => {
            if (items) {
              let oldIndex: number | null = null;
              let newIndex: number | null = null;

              items.find((item, idx) => {
                if (item.id === active.id) {
                  oldIndex = idx;
                } else if (item.id === over.id) {
                  newIndex = idx;
                }
                return oldIndex != null && newIndex != null;
              });

              if (oldIndex != null && newIndex != null) {
                const finalItems = arrayMove(items, oldIndex, newIndex);
                onSortChange && onSortChange(finalItems);
                return finalItems;
              } else {
                return items;
              }
            } else {
              return items;
            }
          });
        }
      },
      [onSortChange]
    );

    const handleHeadCheckChange = useCallback(
      (column: TableColumn, checked: boolean) => {
        Object.keys(localBodyDataRef.current).forEach((key) => {
          const data = localBodyDataRef.current[key].columns[getFinalColumnId(column)];
          if (data) {
            if (!data.checkDisabled) {
              data.commands?.setChecked(checked);
            }
          }
        });
      },
      [getFinalColumnId]
    );

    const handleBodyCheckChange = useCallback(
      (item: TableItem, column: TableColumn) => {
        updateHeadCheck(column);
      },
      [updateHeadCheck]
    );

    const handlePageChange = useCallback(
      (page: number) => {
        simpleBarScrollToTop();
        onPageChange && onPageChange(page);
      },
      [onPageChange, simpleBarScrollToTop]
    );

    /********************************************************************************************************************
     * TableContext Function
     * ******************************************************************************************************************/

    const TableContextSetMenuOpen = useCallback(
      (newMenuOpen: boolean, newOpenMenuId: string | undefined) => {
        if (newMenuOpen) {
          setMenuOpen(newMenuOpen);
          setOpenMenuId(newOpenMenuId);
        } else {
          if (openMenuId === newOpenMenuId) {
            setMenuOpen(false);
            setOpenMenuId(undefined);
          }
        }
      },
      [openMenuId]
    );

    const TableContextSetItemColumnChecked = useCallback(
      (item: TableItem, column: TableColumn, checked: boolean) => {
        const columnId = getFinalColumnId(column);
        const data = localBodyDataRef.current[item.id]?.columns[columnId];
        if (data) {
          data.checked = checked;
          fireOnCheckChange(columnId);
        }
      },
      [fireOnCheckChange, getFinalColumnId]
    );

    const TableContextSetItemColumnCheckDisabled = useCallback(
      (item: TableItem, column: TableColumn, disabled: boolean) => {
        const data = localBodyDataRef.current[item.id]?.columns[getFinalColumnId(column)];
        if (data) {
          data.checkDisabled = disabled;
          updateHeadCheck(column);
        }
      },
      [getFinalColumnId, updateHeadCheck]
    );

    const TableContextSetItemColumnCommands = useCallback(
      (item: TableItem, column: TableColumn, commands: TableBodyCellCommands) => {
        const data = localBodyDataRef.current[item.id]?.columns[getFinalColumnId(column)];
        if (data) {
          data.commands = commands;
        }
      },
      [getFinalColumnId]
    );

    const TableContextSetHeadColumnChecked = useCallback(
      (column: TableColumn, checked: boolean) => {
        const data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
          data.checked = checked;
        }
      },
      [getFinalColumnId]
    );

    const TableContextSetHeadColumnCommands = useCallback(
      (column: TableColumn, commands: TableHeadCellCommands) => {
        const data = localHeaderDataRef.current[getFinalColumnId(column)];
        if (data) {
          data.commands = commands;
        }
      },
      [getFinalColumnId]
    );

    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const isNoData = !!sortableItems && sortableItems.length <= 0;

    const finalPagingHeight = paging && paging.total > 0 ? pagingHeight || 0 : 0;

    const stickyHeader = !isNoData && initStickyHeader;

    const { style, tableSx, pagingStyle } = useMemo(() => {
      const style: CSSProperties = fullHeight
        ? {
            width: '100%',
            ...initStyle,
            flex: 1,
            justifyContent: 'flex-end',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }
        : { width: '100%', ...initStyle };

      const sx = { padding: typeof cellPadding === 'number' ? `${cellPadding}px` : cellPadding };
      const tableSx = {
        '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
      };

      // pageStyle
      const pagingStyle: CSSProperties = { padding: '13px 0', borderTop: '1px solid rgba(224, 224, 224, 1)' };
      if (fullHeight) {
        pagingStyle.position = 'sticky';
      }

      return { style, tableSx, pagingStyle };
    }, [cellPadding, fullHeight, initStyle]);

    const { contentContainerStyle, tableStyle } = useMemo(() => {
      const contentContainerStyle: CSSProperties = fullHeight
        ? {
            height: (containerHeight || 0) - (finalPagingHeight || 0) - 1,
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: finalPagingHeight || 0,
          }
        : { height, minHeight, maxHeight, marginBottom: -1 };

      const tableStyle =
        fullHeight && isNoData ? { flex: 1, height: (containerHeight || 0) - finalPagingHeight - 2 } : undefined;

      return { contentContainerStyle, tableStyle };
    }, [containerHeight, finalPagingHeight, fullHeight, height, isNoData, maxHeight, minHeight]);

    const tableTopHead = useMemo(
      () =>
        finalColumns && (
          <TableTopHead
            caption={caption}
            rows={topHeadRows}
            columns={finalColumns}
            items={items}
            defaultAlign={defaultAlign}
            onCheckChange={handleHeadCheckChange}
          />
        ),
      [caption, defaultAlign, finalColumns, handleHeadCheckChange, items, topHeadRows]
    );

    const tableBody = useMemo(
      () =>
        finalColumns && (
          <TableBody>
            {sortableItems ? (
              sortableItems.length > 0 ? (
                <TableSortableBody
                  items={sortableItems}
                  columns={finalColumns}
                  showOddColor={showOddColor}
                  showEvenColor={showEvenColor}
                  defaultAlign={defaultAlign}
                  defaultEllipsis={defaultEllipsis}
                  sortable={sortable}
                  onClick={onClick}
                  onCheckChange={handleBodyCheckChange}
                  onGetBodyRowClassName={onGetBodyRowClassName}
                  onGetBodyRowStyle={onGetBodyRowStyle}
                  onGetBodyRowSx={onGetBodyRowSx}
                  onGetBodyColumnClassName={onGetBodyColumnClassName}
                  onGetBodyColumnSx={onGetBodyColumnSx}
                  onGetBodyColumnStyle={onGetBodyColumnStyle}
                />
              ) : (
                <StyledBodyRow>
                  <TableCell colSpan={finalColumns.length} style={{ flex: 1 }}>
                    {noData ? (
                      noData
                    ) : (
                      <StyledNoDataDiv>
                        <div>
                          <Icon>error</Icon>
                        </div>
                        <div>검색된 정보가 없습니다.</div>
                      </StyledNoDataDiv>
                    )}
                  </TableCell>
                </StyledBodyRow>
              )
            ) : undefined}
          </TableBody>
        ),
      [
        defaultAlign,
        defaultEllipsis,
        finalColumns,
        handleBodyCheckChange,
        noData,
        onClick,
        onGetBodyColumnClassName,
        onGetBodyColumnStyle,
        onGetBodyColumnSx,
        onGetBodyRowClassName,
        onGetBodyRowStyle,
        onGetBodyRowSx,
        showEvenColor,
        showOddColor,
        sortable,
        sortableItems,
      ]
    );

    const tableFooter = useMemo(
      () =>
        finalColumns &&
        !isNoData &&
        footer && (
          <TableFooter>
            <TableRow>
              {finalColumns.map((column, idx) => (
                <TableFooterCell key={idx} column={column} items={items} defaultAlign={defaultAlign} />
              ))}
            </TableRow>
          </TableFooter>
        ),
      [defaultAlign, finalColumns, footer, isNoData, items]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return finalColumns ? (
      <TableContextProvider
        value={{
          menuOpen,
          openMenuId,
          progressiveVisible,
          setMenuOpen: TableContextSetMenuOpen,
          setItemColumnChecked: TableContextSetItemColumnChecked,
          setItemColumnCheckDisabled: TableContextSetItemColumnCheckDisabled,
          setItemColumnCommands: TableContextSetItemColumnCommands,
          setHeadColumnChecked: TableContextSetHeadColumnChecked,
          setHeadColumnCommands: TableContextSetHeadColumnCommands,
        }}
      >
        <Paper
          ref={fullHeight ? containerHeightDetector : undefined}
          className={classNames(
            'Table',
            className,
            !!stickyHeader && 'sticky-header',
            !!fullHeight && 'full-height',
            !!showOddColor && 'odd-color',
            !!showEvenColor && 'even-color',
            !!sortable && 'sortable'
          )}
          variant='outlined'
          style={style}
          sx={sx}
        >
          {fullHeight ? (
            <SimpleBar ref={simpleBarRef} style={contentContainerStyle}>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <MuiTable stickyHeader={stickyHeader} sx={tableSx} style={tableStyle}>
                  {tableTopHead}
                  {tableBody}
                  {tableFooter}
                </MuiTable>
              </DndContext>
            </SimpleBar>
          ) : (
            <Box style={contentContainerStyle}>
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <MuiTable stickyHeader={stickyHeader} sx={tableSx} style={tableStyle}>
                  {tableTopHead}
                  {tableBody}
                  {tableFooter}
                </MuiTable>
              </DndContext>
            </Box>
          )}
          {finalColumns && paging && paging.total > 0 && (
            <Stack
              ref={fullHeight ? pagingHeightResizeDetector : undefined}
              alignItems={pagingAlign}
              style={pagingStyle}
            >
              <TablePagination
                className={pagination?.className}
                style={pagination?.style}
                sx={pagination?.sx}
                paging={paging}
                align={pagingAlign}
                onChange={handlePageChange}
              />
            </Stack>
          )}
        </Paper>
      </TableContextProvider>
    ) : null;
  }
);

export default Table;
