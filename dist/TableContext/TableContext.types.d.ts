import { TableColumn, TableItem, TableProgressiveVisibleInfo } from '../Table';
import { TableBodyCellCommands } from '../TableBodyCell';
import { TableHeadCellCommands } from '../TableHeadCell';
export interface TableContextValue {
    menuOpen: boolean;
    openMenuId?: string;
    progressiveVisible?: TableProgressiveVisibleInfo;
    setMenuOpen(menuOpen: boolean, openMenuId?: string): void;
    setItemColumnChecked(item: TableItem, column: TableColumn, checked: boolean): void;
    setItemColumnCheckDisabled(item: TableItem, column: TableColumn, checkDisabled: boolean): void;
    setItemColumnCommands(item: TableItem, column: TableColumn, commands: TableBodyCellCommands): void;
    setHeadColumnChecked(column: TableColumn, checked: boolean): void;
    setHeadColumnCommands(column: TableColumn, commands: TableHeadCellCommands): void;
}
export declare const TableContextDefaultValue: TableContextValue;
