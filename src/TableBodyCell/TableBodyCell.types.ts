import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
import { TableCommonSxProps } from '../@types';

export interface TableBodyCellCommands {
  setChecked(checked: boolean): void;
  setCheckDisabled(disabled: boolean): void;
}

export interface TableBodyCellProps {
  className?: TableCommonSxProps['className'];
  style?: TableCommonSxProps['style'];
  sx?: TableCommonSxProps['sx'];
  index: number;
  item: TableItem;
  column: TableColumn;
  defaultAlign?: TableProps['defaultAlign'];
  defaultEllipsis?: boolean;
  onClick: TableProps['onClick'];
  onCheckChange(item: TableItem, column: TableColumn, checked: boolean): void;
}
