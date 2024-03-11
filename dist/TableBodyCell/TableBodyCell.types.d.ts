import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
import { CommonSxProps } from '../@types';
export interface TableBodyCellCommands {
    setChecked(checked: boolean): void;
    setCheckDisabled(disabled: boolean): void;
}
export interface TableBodyCellProps {
    className?: CommonSxProps['className'];
    style?: CommonSxProps['style'];
    sx?: CommonSxProps['sx'];
    index: number;
    item: TableItem;
    column: TableColumn;
    defaultAlign?: TableProps['defaultAlign'];
    defaultEllipsis?: boolean;
    onClick: TableProps['onClick'];
    onCheckChange(item: TableItem, column: TableColumn, checked: boolean): void;
}
