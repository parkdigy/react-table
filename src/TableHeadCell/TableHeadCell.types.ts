import { TableColumn, TableProps } from '../Table/Table.types';

export interface TableHeadCellCommands {
  setChecked(checked: boolean): void;
}

export interface TableHeadCellProps {
  column: TableColumn;
  defaultAlign?: TableProps['defaultAlign'];
  onCheckChange(column: TableColumn, checked: boolean): void;
}
