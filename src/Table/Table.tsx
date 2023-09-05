import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  Table as MuiTable,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Stack,
  TableFooter,
  Icon,
} from '@mui/material';
import SimpleBar from 'simplebar-react';
import SimpleBarCore from 'simplebar-core';
import { useResizeDetector } from 'react-resize-detector';
import { TableProps, TableDefaultProps, TableCommands, TableColumn, TableItem } from './Table.types';
import { StyledBodyRow, StyledNoDataDiv } from './Table.styles';
import TableBodyRow from '../TableBodyRow';
import TableHeadCell, { TableHeadCellCommands } from '../TableHeadCell';
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
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import 'simplebar-react/dist/simplebar.min.css';
import TableContextProvider from '../TableContextProvider';
import { v4 as uuid } from 'uuid';
import { TableBodyCellCommands } from '../TableBodyCell';

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

const Table: WithForwardRefType = React.forwardRef<TableCommands, TableProps>(
  (
    {
      columns: initColumns,
      items: initItems,
      paging: initPaging,
      pagingAlign,
      defaultAlign,
      defaultEllipsis,
      stickyHeader: initStickyHeader,
      height,
      minHeight,
      maxHeight,
      fullHeight,
      showOddColor,
      showEvenColor,
      cellPadding,
      footer,
      noData,
      pagination,
      sortable,
      onClick,
      onGetBodyRowSx,
      onPageChange,
      onSortChange,
      onCheckChange,
      // ---------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    // Ref ---------------------------------------------------------------------------------------------------------------

    const localHeaderDataRef = useRef<TLocalHeaderData>({});
    const localBodyDataRef = useRef<TLocalBodyData>({});
    const updateHeadCheckTimer = useRef<NodeJS.Timeout>();
    const fireOnCheckChangeTimer = useRef<Record<string, NodeJS.Timeout | undefined>>({});
    const simpleBarRef = useRef<SimpleBarCore>(null);

    // sortable --------------------------------------------------------------------------------------------------------

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

    // State -------------------------------------------------------------------------------------------------------------

    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenuId, setOpenMenuId] = useState<string | undefined>(undefined);

    // State - containerHeight -------------------------------------------------------------------------------------------

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

    // State - footerHeight --------------------------------------------------------------------------------------------

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

    // State -----------------------------------------------------------------------------------------------------------

    const [columns, setColumns] = useAutoUpdateLayoutState<TableProps['columns']>(initColumns);
    const [finalColumns, setFinalColumns] = useState<TableColumn<TableItem>[]>();
    const [items, setItems] = useAutoUpdateLayoutState<TableProps['items']>(initItems);
    const [sortableItems, setSortableItems] = useState<(TableItem & { id: number | string })[]>();
    const [paging, setPaging] = useAutoUpdateLayoutState<TableProps['paging']>(initPaging);

    // Memo --------------------------------------------------------------------------------------------------------------

    const tableSx = useMemo(() => {
      const sx = {
        padding: typeof cellPadding === 'number' ? `${cellPadding}px` : cellPadding,
      };

      return {
        '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
      };
    }, [cellPadding]);

    // Function --------------------------------------------------------------------------------------------------------

    const makeSortableItems = useCallback((items?: TableProps['items']) => {
      return items?.map<TableItem & { id: number | string }>(({ id, ...item }, index) => {
        return { id: id == null ? `${uuid()}_${index}` : id, ...item };
      });
    }, []);

    const updateHeadCheck = useCallback((column: TableColumn) => {
      if (updateHeadCheckTimer.current) {
        clearTimeout(updateHeadCheckTimer.current);
        updateHeadCheckTimer.current = undefined;
      }

      const headColumnData = localHeaderDataRef.current[column.id];
      if (headColumnData) {
        updateHeadCheckTimer.current = setTimeout(() => {
          updateHeadCheckTimer.current = undefined;

          const enabledCheckExists = !!Object.keys(localBodyDataRef.current).find((key) => {
            const columnData = localBodyDataRef.current[key].columns[column.id];
            if (columnData) {
              if (!columnData.checkDisabled) {
                return true;
              }
            }
          });

          const allChecked =
            enabledCheckExists &&
            !Object.keys(localBodyDataRef.current).find((key) => {
              const columnData = localBodyDataRef.current[key].columns[column.id];
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

    // Effect ----------------------------------------------------------------------------------------------------------

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

      setFinalColumns(columns?.filter(columnFilter));
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
              const columnId = (c as TableColumn).id;

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
    }, [sortableItems, finalColumns, clearFireOnCheckChangeTimer]);

    useLayoutEffect(() => {
      if (finalColumns) {
        localHeaderDataRef.current = finalColumns.reduce<TLocalHeaderData>((res, c) => {
          res[(c as TableColumn).id] = { column: c, checked: false };
          return res;
        }, {});
      } else {
        localHeaderDataRef.current = {};
      }
    }, [finalColumns]);

    // Commands --------------------------------------------------------------------------------------------------------

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
      makeSortableItems,
      setColumns,
      setItems,
      setPaging,
      getCheckedItems,
      simpleBarScrollToTop,
    ]);

    // Event Handler ---------------------------------------------------------------------------------------------------

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

    const handleHeadCheckChange = useCallback((column: TableColumn, checked: boolean) => {
      Object.keys(localBodyDataRef.current).forEach((key) => {
        const data = localBodyDataRef.current[key].columns[column.id];
        if (data) {
          if (!data.checkDisabled) {
            data.commands?.setChecked(checked);
          }
        }
      });
    }, []);

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

    // TableContext Function ---------------------------------------------------------------------------------------------

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
        const data = localBodyDataRef.current[item.id]?.columns[column.id];
        if (data) {
          data.checked = checked;
          fireOnCheckChange(column.id);
        }
      },
      [fireOnCheckChange]
    );

    const TableContextSetItemColumnCheckDisabled = useCallback(
      (item: TableItem, column: TableColumn, disabled: boolean) => {
        const data = localBodyDataRef.current[item.id]?.columns[column.id];
        if (data) {
          data.checkDisabled = disabled;
          updateHeadCheck(column);
        }
      },
      [updateHeadCheck]
    );

    const TableContextSetItemColumnCommands = useCallback(
      (item: TableItem, column: TableColumn, commands: TableBodyCellCommands) => {
        const data = localBodyDataRef.current[item.id]?.columns[column.id];
        if (data) {
          data.commands = commands;
        }
      },
      []
    );

    const TableContextSetHeadColumnChecked = useCallback((column: TableColumn, checked: boolean) => {
      const data = localHeaderDataRef.current[column.id];
      if (data) {
        data.checked = checked;
      }
    }, []);

    const TableContextSetHeadColumnCommands = useCallback((column: TableColumn, commands: TableHeadCellCommands) => {
      const data = localHeaderDataRef.current[column.id];
      if (data) {
        data.commands = commands;
      }
    }, []);

    // Memo --------------------------------------------------------------------------------------------------------------

    const tableContextValue = useMemo(
      () => ({
        menuOpen,
        openMenuId,
        setMenuOpen: TableContextSetMenuOpen,
        setItemColumnChecked: TableContextSetItemColumnChecked,
        setItemColumnCheckDisabled: TableContextSetItemColumnCheckDisabled,
        setItemColumnCommands: TableContextSetItemColumnCommands,
        setHeadColumnChecked: TableContextSetHeadColumnChecked,
        setHeadColumnCommands: TableContextSetHeadColumnCommands,
      }),
      [
        TableContextSetHeadColumnChecked,
        TableContextSetHeadColumnCommands,
        TableContextSetItemColumnCheckDisabled,
        TableContextSetItemColumnChecked,
        TableContextSetItemColumnCommands,
        TableContextSetMenuOpen,
        menuOpen,
        openMenuId,
      ]
    );

    // Memo --------------------------------------------------------------------------------------------------------------

    const isNoData = useMemo(() => !!sortableItems && sortableItems.length <= 0, [sortableItems]);
    const finalPagingHeight = useMemo(
      () => (paging && paging.total > 0 ? pagingHeight || 0 : 0),
      [paging, pagingHeight]
    );
    const stickyHeader = useMemo(() => !isNoData && initStickyHeader, [initStickyHeader, isNoData]);

    const style = useMemo((): CSSProperties => {
      if (fullHeight) {
        return {
          width: '100%',
          ...initStyle,
          flex: 1,
          justifyContent: 'flex-end',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        };
      } else {
        return { width: '100%', ...initStyle };
      }
    }, [initStyle, fullHeight]);

    const simpleBarStyle = useMemo((): CSSProperties => {
      if (fullHeight) {
        return {
          height: (containerHeight || 0) - (finalPagingHeight || 0) - 1,
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          marginBottom: finalPagingHeight || 0,
        };
      } else {
        return { height, minHeight, maxHeight, marginBottom: -1 };
      }
    }, [fullHeight, containerHeight, finalPagingHeight, height, minHeight, maxHeight]);

    const tableStyle = useMemo((): CSSProperties | undefined => {
      if (fullHeight && isNoData) {
        return { flex: 1, height: (containerHeight || 0) - finalPagingHeight - 2 };
      }
    }, [fullHeight, isNoData, containerHeight, finalPagingHeight]);

    const pagingStyle = useMemo((): CSSProperties => {
      const style = { padding: '13px 0', borderTop: '1px solid rgba(224, 224, 224, 1)' };
      if (fullHeight) {
        return { position: 'sticky', ...style };
      }
      return style;
    }, [fullHeight]);

    // Render ----------------------------------------------------------------------------------------------------------

    return finalColumns ? (
      <TableContextProvider value={tableContextValue}>
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
          <SimpleBar ref={simpleBarRef} style={simpleBarStyle}>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <MuiTable stickyHeader={stickyHeader} sx={tableSx} style={tableStyle}>
                <TableHead>
                  <TableRow>
                    {finalColumns.map((column, idx) => (
                      <TableHeadCell
                        key={idx}
                        column={column}
                        defaultAlign={defaultAlign}
                        onCheckChange={handleHeadCheckChange}
                      />
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortableItems ? (
                    sortableItems.length > 0 ? (
                      <SortableContext items={sortableItems} strategy={verticalListSortingStrategy}>
                        {sortableItems.map((item, idx) => (
                          <TableBodyRow
                            key={item.id}
                            className={classNames(!!showOddColor && 'odd-color', !!showEvenColor && 'even-color')}
                            hover
                            sx={onGetBodyRowSx ? onGetBodyRowSx(item, idx) : undefined}
                            id={item.id}
                            index={idx}
                            defaultAlign={defaultAlign}
                            defaultEllipsis={defaultEllipsis}
                            sortable={sortable}
                            columns={finalColumns}
                            item={item}
                            onClick={onClick}
                            onCheckChange={handleBodyCheckChange}
                          />
                        ))}
                      </SortableContext>
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
                {!isNoData && footer && (
                  <TableFooter>
                    <TableRow>
                      {finalColumns.map((column, idx) => (
                        <TableFooterCell key={idx} column={column} defaultAlign={defaultAlign} />
                      ))}
                    </TableRow>
                  </TableFooter>
                )}
              </MuiTable>
            </DndContext>
          </SimpleBar>
          {paging && paging.total > 0 && (
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

Table.displayName = 'Table';
Table.defaultProps = TableDefaultProps;

export default Table;
