export interface TableContextValue {
    menuOpen: boolean;
    openMenuId?: string;
    setMenuOpen(menuOpen: boolean, openMenuId?: string): void;
}
export declare const TableContextDefaultValue: TableContextValue;
