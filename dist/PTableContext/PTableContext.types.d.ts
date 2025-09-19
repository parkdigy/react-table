import { PTableColumn, PTableItem, PTableProgressiveVisibleInfo } from '../PTable';
import { PTableBodyCellCommands } from '../PTableBodyCell';
import { PTableHeadCellCommands } from '../PTableHeadCell';
export interface PTableContextValue {
    menuOpen: boolean;
    openMenuId?: string;
    progressiveVisible?: PTableProgressiveVisibleInfo;
    setMenuOpen: (menuOpen: boolean, openMenuId?: string) => void;
    setItemColumnChecked: (item: PTableItem, column: PTableColumn, checked: boolean) => void;
    setItemColumnCheckDisabled: (item: PTableItem, column: PTableColumn, checkDisabled: boolean) => void;
    setItemColumnCommands: (item: PTableItem, column: PTableColumn, commands: PTableBodyCellCommands) => void;
    setHeadColumnChecked: (column: PTableColumn, checked: boolean) => void;
    setHeadColumnCommands: (column: PTableColumn, commands: PTableHeadCellCommands) => void;
}
