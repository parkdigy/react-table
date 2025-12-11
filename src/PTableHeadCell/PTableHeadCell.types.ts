import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';

export interface PTableHeadCellCommands {
  setChecked: (checked: boolean) => void;
  setCheckDisabled: (checkDisabled: boolean) => void;
}

export interface PTableHeadCellProps<T = PTableItem> {
  column: PTableColumn;
  items?: T[];
  defaultAlign?: PTableProps['defaultAlign'];
  top?: number;
  onCheckChange: (column: PTableColumn, checked: boolean) => void;
}
