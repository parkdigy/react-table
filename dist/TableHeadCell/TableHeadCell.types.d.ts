import { TableColumn, TableProps } from '../Table/Table.types';
export interface TableHeadCellCommands {
    setChecked(checked: boolean): void;
    setCheckDisabled(checkDisabled: boolean): void;
}
export interface TableHeadCellProps {
    column: TableColumn;
    defaultAlign?: TableProps['defaultAlign'];
    top?: number;
    onCheckChange(column: TableColumn, checked: boolean): void;
}
