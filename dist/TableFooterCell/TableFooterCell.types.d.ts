import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
export interface TableFooterCellProps<T = TableItem> {
    column: TableColumn;
    items?: T[];
    defaultAlign?: TableProps['defaultAlign'];
}
