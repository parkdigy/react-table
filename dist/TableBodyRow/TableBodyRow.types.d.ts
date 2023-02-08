import { TableCellProps, TableRowProps } from '@mui/material';
import { TableColumn, TableItem, TableProps } from '../Table';
export interface TableBodyRowProps extends Omit<TableRowProps, 'id' | 'onClick'> {
    id: string | number;
    index: number;
    defaultAlign?: TableCellProps['align'];
    defaultEllipsis?: boolean;
    sortable?: boolean;
    columns: TableColumn<TableItem>[];
    item: TableItem;
    onClick: TableProps['onClick'];
}
export declare const TableBodyRowDefaultProps: {};
