import { TableColumn, TableProps } from '../Table/Table.types';

export interface TableFooterCellProps {
  column: TableColumn;
  defaultAlign?: TableProps['defaultAlign'];
}
