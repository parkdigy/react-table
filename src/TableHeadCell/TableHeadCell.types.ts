import { TableColumn, TableProps } from '../Table/Table.types';

export interface TableHeadCellProps {
  column: TableColumn;
  defaultAlign?: TableProps['defaultAlign'];
}
