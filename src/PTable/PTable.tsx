import React, { CSSProperties, useCallback, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Table as MuiTable, TableBody, TableRow, TableCell, Paper, Stack, TableFooter, Icon, Box } from '@mui/material';
import SimpleBarCore from 'simplebar-core';
import { useResizeDetector } from 'react-resize-detector';
import { PTableProps as Props, PTableCommands, PTableColumn, PTableItem } from './PTable.types';
import { StyledBodyRow, StyledNoDataDiv } from './PTable.styles.private';
import { PTableHeadCellCommands } from '../PTableHeadCell';
import PTableFooterCell from '../PTableFooterCell';
import PTablePagination from '../PTablePagination';
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
import PTableContextProvider from '../PTableContextProvider';
import { PTableBodyCellCommands } from '../PTableBodyCell';
import PTableTopHead from '../PTableTopHead';
import SimpleBar from 'simplebar-react';
import { makeSortableItems } from './PTable.function.private';
import { PTableSortableBody } from '../PTableSortableBody';
import {
  useAutoUpdateRef,
  useEventEffect,
  useEventLayoutEffect,
  useFirstSkipChanged,
  useForwardRef,
} from '@pdg/react-hook';

/********************************************************************************************************************
 * columnFilter
 * ******************************************************************************************************************/

function columnFilter<T>(v: T | undefined | null | false): v is T {
  return v !== undefined && v !== null && v !== false;
}

/********************************************************************************************************************
 * getNewColumnId
 * ******************************************************************************************************************/
let _columnId = 0;
const getNewColumnId = () => {
  _columnId += 1;
  return `$c$${_columnId}$`;
};

/********************************************************************************************************************
 * TLocalBodyData
 * ******************************************************************************************************************/
type TLocalBodyData<T extends PTableItem = PTableItem> = Record<
  string | number,
  {
    item: T;
    columns: Record<
      string,
      {
        column: PTableColumn<T>;
        checked: boolean;
        checkDisabled: boolean;
        commands?: PTableBodyCellCommands;
      }
    >;
  }
>;

/********************************************************************************************************************
 * TLocalHeaderData
 * ******************************************************************************************************************/
type TLocalHeaderData<T extends PTableItem = PTableItem> = Record<
  string,
  { column: PTableColumn<T>; checked: boolean; commands?: PTableHeadCellCommands }
>;

/********************************************************************************************************************
 * PTable
 * ******************************************************************************************************************/

function PTable<T extends PTableItem = PTableItem>({
  ref,
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
}: Props<T>) {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const localHeaderDataRef = useRef<TLocalHeaderData<T>>({});
  const localBodyDataRef = useRef<TLocalBodyData<T>>({});
  const updateHeadCheckTimer = useRef<NodeJS.Timeout>(undefined);
  const fireOnCheckChangeTimer = useRef<Record<string, NodeJS.Timeout | undefined>>({});
  const simpleBarRef = useRef<SimpleBarCore>(null);
  const onPageChangeRef = useAutoUpdateRef(onPageChange);
  const onSortChangeRef = useAutoUpdateRef(onSortChange);
  const onCheckChangeRef = useAutoUpdateRef(onCheckChange);

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

  const [sortableItems, setSortableItems] = useState<(T & { id: number | string })[]>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | undefined>(undefined);
  const [containerHeight, setContainerHeight] = useState<number | undefined>();
  const [pagingHeight, setPagingHeight] = useState<number | undefined>();

  /** finalColumns */
  const [finalColumns, _setFinalColumns] = useState<PTableColumn<T>[]>();
  const finalColumnsRef = useAutoUpdateRef(finalColumns);
  const setFinalColumns = useCallback(
    (newValue: typeof finalColumns) => {
      _setFinalColumns(newValue);
      finalColumnsRef.current = newValue;
    },
    [finalColumnsRef]
  );

  /** finalColumnsId */
  const [finalColumnsId, _setFinalColumnsId] = useState<string[] | undefined>(undefined);
  const finalColumnsIdRef = useAutoUpdateRef(finalColumnsId);
  const setFinalColumnsId = useCallback(
    (newValue: typeof finalColumnsId) => {
      _setFinalColumnsId(newValue);
      finalColumnsIdRef.current = newValue;
    },
    [finalColumnsIdRef]
  );

  /** columns */
  const [columns, _setColumns] = useState(initColumns);
  useFirstSkipChanged(() => _setColumns(initColumns), [initColumns]);
  const columnsRef = useAutoUpdateRef(columns);
  const setColumns = useCallback(
    (newValue: typeof columns) => {
      _setColumns(newValue);
      columnsRef.current = newValue;
    },
    [columnsRef]
  );

  /** items */
  const [items, _setItems] = useState(initItems);
  useFirstSkipChanged(() => _setItems(initItems), [initItems]);
  const itemsRef = useAutoUpdateRef(items);
  const setItems = useCallback(
    (newValue: typeof items) => {
      _setItems(newValue);
      itemsRef.current = newValue;
    },
    [itemsRef]
  );

  /** paging */
  const [paging, _setPaging] = useState(initPaging);
  useFirstSkipChanged(() => _setPaging(initPaging), [initPaging]);
  const pagingRef = useAutoUpdateRef(paging);
  const setPaging = useCallback(
    (newValue: typeof paging) => {
      _setPaging(newValue);
      pagingRef.current = newValue;
    },
    [pagingRef]
  );

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

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

  /** getFinalColumnId */
  const getFinalColumnId = useCallback(
    (column: PTableColumn<T>) => {
      if (finalColumnsRef.current && finalColumnsIdRef.current) {
        const idx = finalColumnsRef.current.indexOf(column);
        return finalColumnsIdRef.current[idx];
      } else {
        return '';
      }
    },
    [finalColumnsIdRef, finalColumnsRef]
  );

  /** updateHeadCheck */
  const updateHeadCheck = useCallback(
    (column: PTableColumn<T>) => {
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

  /** getChecked */
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

  /** setChecked */
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

  /** toggleChecked */
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

  /** setCheckedAll */
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

  /** getCheckedItems */
  const getCheckedItems = useCallback((columnId: string): T[] => {
    const checkedItems: T[] = [];
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

  /** stopHeadCheckTimer */
  const stopHeadCheckTimer = useCallback(() => {
    if (updateHeadCheckTimer.current) {
      clearTimeout(updateHeadCheckTimer.current);
      updateHeadCheckTimer.current = undefined;
    }
  }, []);

  /** clearFireOnCheckChangeTimer */
  const clearFireOnCheckChangeTimer = useCallback(() => {
    Object.keys(fireOnCheckChangeTimer.current).forEach((key) => {
      if (fireOnCheckChangeTimer.current[key]) {
        clearTimeout(fireOnCheckChangeTimer.current[key]);
      }
    });
    fireOnCheckChangeTimer.current = {};
  }, []);

  /** fireOnCheckChange */
  const fireOnCheckChange = useCallback(
    (columnId: string) => {
      if (fireOnCheckChangeTimer.current[columnId]) {
        clearTimeout(fireOnCheckChangeTimer.current[columnId]);
        fireOnCheckChangeTimer.current[columnId] = undefined;
      }
      if (onCheckChangeRef.current) {
        fireOnCheckChangeTimer.current[columnId] = setTimeout(() => {
          fireOnCheckChangeTimer.current[columnId] = undefined;

          onCheckChangeRef.current?.(columnId, getCheckedItems(columnId));
        }, 100);
      }
    },
    [getCheckedItems, onCheckChangeRef]
  );

  /** simpleBarScrollToTop */
  const simpleBarScrollToTop = useCallback(() => {
    simpleBarRef.current?.getScrollElement()?.scrollTo({ top: 0 });
  }, []);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEventEffect(() => {
    return () => {
      stopHeadCheckTimer();
      clearFireOnCheckChangeTimer();
    };
  }, []);

  useEventEffect(() => {
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
  }, [items]);

  useEventEffect(() => {
    stopHeadCheckTimer();
    clearFireOnCheckChangeTimer();

    const newFinalColumns = columns?.filter(columnFilter);
    setFinalColumns(newFinalColumns);
    setFinalColumnsId(
      newFinalColumns?.map((col) => {
        if (col.id) {
          return col.id;
        } else {
          return getNewColumnId();
        }
      })
    );
  }, [columns]);

  useEventEffect(() => {
    clearFireOnCheckChangeTimer();

    if (sortableItems) {
      localBodyDataRef.current = sortableItems.reduce<TLocalBodyData<T>>((res, item) => {
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
  }, [sortableItems, finalColumns]);

  useEventLayoutEffect(() => {
    if (finalColumns) {
      localHeaderDataRef.current = finalColumns.reduce<TLocalHeaderData<T>>((res, c) => {
        res[getFinalColumnId(c)] = { column: c, checked: false };
        return res;
      }, {});
    } else {
      localHeaderDataRef.current = {};
    }
  }, [finalColumns]);

  /********************************************************************************************************************
   * Commands
   * ******************************************************************************************************************/

  useForwardRef(
    ref,
    useMemo((): PTableCommands<T> => {
      return {
        getColumns: () => columnsRef.current,
        setColumns,
        getItems: () => itemsRef.current,
        setItems,
        getPaging: () => pagingRef.current,
        setItemsPaging: (items, paging) => {
          setItems(items);
          setPaging(paging);
        },
        resetSort() {
          setSortableItems(makeSortableItems(itemsRef.current));
        },
        getCheckedItems,
        getChecked,
        setChecked,
        toggleChecked,
        setCheckedAll,
        scrollToTop: simpleBarScrollToTop,
      };
    }, [
      columnsRef,
      getChecked,
      getCheckedItems,
      itemsRef,
      pagingRef,
      setChecked,
      setCheckedAll,
      setColumns,
      setItems,
      setPaging,
      simpleBarScrollToTop,
      toggleChecked,
    ])
  );

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
              onSortChangeRef.current?.(finalItems);
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
    [onSortChangeRef]
  );

  const handleHeadCheckChange = useCallback(
    (column: PTableColumn<T>, checked: boolean) => {
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
    (item: T, column: PTableColumn<T>) => {
      updateHeadCheck(column);
    },
    [updateHeadCheck]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      simpleBarScrollToTop();
      onPageChangeRef.current?.(page);
    },
    [onPageChangeRef, simpleBarScrollToTop]
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
    (item: T, column: PTableColumn<T>, checked: boolean) => {
      const columnId = getFinalColumnId(column);
      if (localBodyDataRef.current) {
        const bodyData = localBodyDataRef.current[item.id];
        if (bodyData) {
          const columns = bodyData.columns;
          const data = columns[columnId];
          if (data) {
            data.checked = checked;
            fireOnCheckChange(columnId);
          }
        }
      }
    },
    [fireOnCheckChange, getFinalColumnId]
  );

  const TableContextSetItemColumnCheckDisabled = useCallback(
    (item: T, column: PTableColumn<T>, disabled: boolean) => {
      const columnId = getFinalColumnId(column);
      if (columnId && localBodyDataRef.current[item.id]?.columns[columnId]) {
        localBodyDataRef.current[item.id].columns[columnId].checkDisabled = disabled;
        updateHeadCheck(column);
      } else {
        let runCount = 0;
        const run = () => {
          runCount += 1;
          if (runCount > 10) return;

          const columnId = getFinalColumnId(column);
          if (!localBodyDataRef.current[item.id]?.columns[columnId]) {
            setTimeout(run);
            return;
          }
          localBodyDataRef.current[item.id].columns[columnId].checkDisabled = disabled;
          updateHeadCheck(column);
        };
        run();
      }
    },
    [getFinalColumnId, updateHeadCheck]
  );

  const TableContextSetItemColumnCommands = useCallback(
    (item: T, column: PTableColumn<T>, commands: PTableBodyCellCommands) => {
      const columnId = getFinalColumnId(column);
      if (columnId && localBodyDataRef.current[item.id]?.columns[columnId]) {
        localBodyDataRef.current[item.id].columns[columnId].commands = commands;
      } else {
        let runCount = 0;
        const run = () => {
          runCount += 1;
          if (runCount > 10) return;

          const columnId = getFinalColumnId(column);
          if (!localBodyDataRef.current[item.id]?.columns[columnId]) {
            setTimeout(run);
            return;
          }
          localBodyDataRef.current[item.id].columns[columnId].commands = commands;
        };
        run();
      }
    },
    [getFinalColumnId]
  );

  const TableContextSetHeadColumnChecked = useCallback(
    (column: PTableColumn<T>, checked: boolean) => {
      const columnId = getFinalColumnId(column);
      if (columnId && localHeaderDataRef.current[columnId]) {
        localHeaderDataRef.current[columnId].checked = checked;
      } else {
        let runCount = 0;
        const run = () => {
          runCount += 1;
          if (runCount > 10) return;

          const columnId = getFinalColumnId(column);
          if (!localHeaderDataRef.current[columnId]) {
            setTimeout(run);
            return;
          }
          localHeaderDataRef.current[columnId].checked = checked;
        };
        run();
      }
    },
    [getFinalColumnId]
  );

  const TableContextSetHeadColumnCommands = useCallback(
    (column: PTableColumn<T>, commands: PTableHeadCellCommands) => {
      const columnId = getFinalColumnId(column);
      if (columnId && localHeaderDataRef.current[columnId]) {
        localHeaderDataRef.current[columnId].commands = commands;
      } else {
        let runCount = 0;
        const run = () => {
          runCount += 1;
          if (runCount > 10) return;

          const columnId = getFinalColumnId(column);
          if (!localHeaderDataRef.current[columnId]) {
            setTimeout(run);
            return;
          }
          localHeaderDataRef.current[columnId].commands = commands;
        };
        run();
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
        <PTableTopHead
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
              <PTableSortableBody
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
              <PTableFooterCell key={idx} column={column} items={items} defaultAlign={defaultAlign} />
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
    <PTableContextProvider
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
          'PTable',
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
          <Stack ref={fullHeight ? pagingHeightResizeDetector : undefined} alignItems={pagingAlign} style={pagingStyle}>
            <PTablePagination
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
    </PTableContextProvider>
  ) : null;
}

export default PTable;
