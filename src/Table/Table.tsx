import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
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
import TableHeadCell from '../TableHeadCell';
import TableBodyCell from '../TableBodyCell';
import TableFooterCell from '../TableFooterCell';
import TablePagination from '../TablePagination';
import { useAutoUpdateState } from '@pdg/react-hook';

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
      onClick,
      onGetBodyRowSx,
      onPageChange,
    },
    ref
  ) => {
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

    const [columns, setColumns] = useAutoUpdateState<TableProps['columns']>(initColumns);
    const [finalColumns, setFinalColumns] = useState<TableColumn<TableItem>[]>();
    const [items, setItems] = useAutoUpdateState<TableProps['items']>(initItems);
    const [paging, setPaging] = useAutoUpdateState<TableProps['paging']>(initPaging);
    const [tableSx] = useAutoUpdateState<TableProps['sx']>(
      useCallback(() => {
        const sx = {
          padding: typeof cellPadding === 'number' ? `${cellPadding}px` : cellPadding,
        };

        return {
          '> .MuiTableHead-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
          '> .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
          '> .MuiTableFooter-root > .MuiTableRow-root > .MuiTableCell-root ': sx,
        };
      }, [cellPadding])
    );

    // Effect ----------------------------------------------------------------------------------------------------------

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
        };

        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
    }, [ref, columns, items, paging]);

    // Render ----------------------------------------------------------------------------------------------------------

    return finalColumns ? (
      <Paper className='ReactMuiTable' variant='outlined' style={{ width: '100%' }}>
        <SimpleBar style={{ height, minHeight, maxHeight }}>
          <MuiTable stickyHeader={stickyHeader} sx={tableSx}>
            <TableHead>
              <TableRow>
                {finalColumns.map((column, idx) => (
                  <TableHeadCell key={idx} column={column} defaultAlign={defaultAlign} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody style={{ paddingBottom: footerHeight || 65 }}>
              {items ? (
                items.length > 0 ? (
                  items.map((item, idx) => (
                    <StyledBodyRow
                      className={classNames(!!showOddColor && 'odd-color', !!showEvenColor && 'even-color')}
                      key={idx}
                      hover
                      sx={onGetBodyRowSx ? onGetBodyRowSx(item, idx) : undefined}
                    >
                      {finalColumns.map((column: TableColumn, columnIdx) => (
                        <TableBodyCell
                          key={columnIdx}
                          index={idx}
                          item={item}
                          defaultAlign={defaultAlign}
                          defaultEllipsis={defaultEllipsis}
                          column={column}
                          onClick={onClick}
                        />
                      ))}
                    </StyledBodyRow>
                  ))
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
        </SimpleBar>
      </Paper>
    ) : null;
  }
);

Table.displayName = 'Table';
Table.defaultProps = TableDefaultProps;

export default Table;
