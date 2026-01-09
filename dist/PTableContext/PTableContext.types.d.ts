import { type PTableColumn, type PTableItem, type PTableProgressiveVisibleInfo } from '../PTable';
import { type PTableBodyCellCommands } from '../PTableBodyCell';
import { type PTableHeadCellCommands } from '../PTableHeadCell';
export interface PTableContextValue<T extends PTableItem = PTableItem> {
    menuOpen: boolean;
    openMenuId?: string;
    progressiveVisible?: PTableProgressiveVisibleInfo;
    setMenuOpen: (menuOpen: boolean, openMenuId?: string) => void;
    setItemColumnChecked: (item: T, column: PTableColumn<T>, checked: boolean) => void;
    setItemColumnCheckDisabled: (item: T, column: PTableColumn<T>, checkDisabled: boolean) => void;
    setItemColumnCommands: (item: T, column: PTableColumn<T>, commands: PTableBodyCellCommands) => void;
    setHeadColumnChecked: (column: PTableColumn<T>, checked: boolean) => void;
    setHeadColumnCommands: (column: PTableColumn<T>, commands: PTableHeadCellCommands) => void;
}
