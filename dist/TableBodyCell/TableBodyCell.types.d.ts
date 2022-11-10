import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
export interface TableBodyCellProps {
    index: number;
    item: TableItem;
    column: TableColumn;
    defaultAlign?: TableProps['defaultAlign'];
    defaultEllipsis?: boolean;
    onClick: TableProps['onClick'];
}
