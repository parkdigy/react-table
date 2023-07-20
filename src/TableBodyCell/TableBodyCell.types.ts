import { TableColumn, TableItem, TableProps } from '../Table/Table.types';

export interface TableBodyCellCommands {
  setCheckDisabled(disabled: boolean): void;
  setChecked(checked: boolean): void;
}

export interface TableBodyCellProps {
  index: number;
  item: TableItem;
  column: TableColumn;
  defaultAlign?: TableProps['defaultAlign'];
  defaultEllipsis?: boolean;
  onClick: TableProps['onClick'];
  onCheckChange(item: TableItem, column: TableColumn, checked: boolean): void;
}
