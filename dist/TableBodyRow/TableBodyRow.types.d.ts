import { TableCellProps, TableRowProps } from '@mui/material';
import { TableColumn, TableItem, TableProps } from '../Table';
import { TableBodyCellProps } from '../TableBodyCell';
import { CommonSxProps } from '../@types';
export interface TableBodyRowProps extends Omit<TableRowProps, 'id' | 'onClick'> {
    id: string | number;
    index: number;
    defaultAlign?: TableCellProps['align'];
    defaultEllipsis?: boolean;
    sortable?: boolean;
    columns: TableColumn[];
    item: TableItem;
    onClick: TableProps['onClick'];
    onCheckChange: TableBodyCellProps['onCheckChange'];
    onGetColumnClassName?(column: TableColumn, item: TableItem, index: number): CommonSxProps['className'] | undefined;
    onGetColumnStyle?(column: TableColumn, item: TableItem, index: number): CommonSxProps['style'] | undefined;
    onGetColumnSx?(column: TableColumn, item: TableItem, index: number): CommonSxProps['sx'] | undefined;
}
export declare const TableBodyRowDefaultProps: {};
