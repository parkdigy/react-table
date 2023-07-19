export interface TableContextValue {
  menuOpen: boolean;
  openMenuId?: string;
  setMenuOpen(menuOpen: boolean, openMenuId?: string): void;
}

export const TableContextDefaultValue: TableContextValue = {
  menuOpen: false,
  openMenuId: undefined,
  // eslint-disable-next-line
  setMenuOpen() {},
};
