import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';

export interface PTableHeadCellCommands {
  setChecked: (checked: boolean) => void;
  setCheckDisabled: (checkDisabled: boolean) => void;
}

export interface PTableHeadCellProps<T extends PTableItem = PTableItem> {
  column: PTableColumn<T>;
  items?: T[];
  defaultAlign?: PTableProps<T>['defaultAlign'];
  top?: number;
  onCheckChange: (column: PTableColumn<T>, checked: boolean) => void;
}
