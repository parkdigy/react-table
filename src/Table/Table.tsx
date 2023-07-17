import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
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
import { useResizeDetector } from 'react-resize-detector';
import { TableProps, TableDefaultProps, TableCommands, TableColumn, TableItem } from './Table.types';
import { StyledBodyRow, StyledNoDataDiv } from './Table.styles';
import TableBodyRow from '../TableBodyRow';
import TableHeadCell from '../TableHeadCell';
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

function columnFilter<T>(v: T | undefined | null | false): v is T {
  return v !== undefined && v !== null && v !== false;
}

const Table = React.forwardRef<TableCommands, TableProps>(
  (
    {
      columns: initColumns,
      items: initItems,
      paging: initPaging,
      pagingAlign,
      defaultAlign,
      defaultEllipsis,
      stickyHeader,
      height,
      minHeight,
      maxHeight,
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
      // ---------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
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

    // State - footerHeight --------------------------------------------------------------------------------------------

    const [footerHeight, setFooterHeight] = useState<number | undefined>();

    const { ref: footerHeightResizeDetector } = useResizeDetector({
      handleHeight: true,
      handleWidth: false,
      onResize() {
        if (footerHeightResizeDetector.current) {
          setFooterHeight(footerHeightResizeDetector.current.getBoundingClientRect().height);
        } else {
          setFooterHeight(undefined);
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
        return { id: id == null ? index : id, ...item };
      });
    }, []);

    // Effect ----------------------------------------------------------------------------------------------------------

    useEffect(() => {
      setSortableItems(makeSortableItems(items));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    useEffect(() => {
      setFinalColumns(columns?.filter(columnFilter));
    }, [columns]);

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
        };

        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
    }, [ref, columns, items, paging, makeSortableItems, setColumns, setItems, setPaging]);

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

    // Memo --------------------------------------------------------------------------------------------------------------

    const style = useMemo(() => ({ width: '100%', ...initStyle }), [initStyle]);

    // Render ----------------------------------------------------------------------------------------------------------

    return finalColumns ? (
      <Paper className={classNames('Table', className)} variant='outlined' style={style} sx={sx}>
        <SimpleBar style={{ height, minHeight, maxHeight }}>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <MuiTable stickyHeader={stickyHeader} sx={tableSx}>
              <TableHead>
                <TableRow>
                  {finalColumns.map((column, idx) => (
                    <TableHeadCell key={idx} column={column} defaultAlign={defaultAlign} />
                  ))}
                </TableRow>
              </TableHead>
              <TableBody style={{ paddingBottom: footerHeight || 65 }}>
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
                        />
                      ))}
                    </SortableContext>
                  ) : (
                    <StyledBodyRow>
                      <TableCell colSpan={finalColumns.length}>
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
              {paging && (
                <TableFooter
                  ref={footerHeightResizeDetector}
                  sx={{
                    left: 0,
                    bottom: 0, // <-- KEY
                    zIndex: 2,
                    position: 'sticky',
                    backgroundColor: '#fff',
                  }}
                >
                  <TableRow>
                    <TableCell
                      colSpan={finalColumns.length}
                      style={{ borderBottom: 0, borderTop: '1px solid rgba(224, 224, 224, 1)' }}
                    >
                      <Stack alignItems={pagingAlign}>
                        <TablePagination
                          className={pagination?.className}
                          style={pagination?.style}
                          sx={pagination?.sx}
                          paging={paging}
                          align={pagingAlign}
                          onChange={onPageChange}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableFooter>
              )}
              {footer && (
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
      </Paper>
    ) : null;
  }
);

Table.displayName = 'Table';
Table.defaultProps = TableDefaultProps;

export default Table;
