import { TableCellProps, TableRowProps } from '@mui/material';
import { TableColumn, TableItem, TableProps } from '../Table';
import { TableBodyCellProps } from '../TableBodyCell';
export interface TableBodyRowProps extends Omit<TableRowProps, 'id' | 'onClick'> {
    id: string | number;
    index: number;
    defaultAlign?: TableCellProps['align'];
    defaultEllipsis?: boolean;
    sortable?: boolean;
    columns: TableColumn<TableItem>[];
    item: TableItem;
    onClick: TableProps['onClick'];
    onCheckChange: TableBodyCellProps['onCheckChange'];
}
export declare const TableBodyRowDefaultProps: {};
