import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
import { TableCommonSxProps } from '../@types';

export interface TableCommonCellProps extends TableCommonSxProps {
  type: 'head' | 'body' | 'footer';
  column: TableColumn;
  defaultAlign?: TableProps['defaultAlign'];
  defaultEllipsis?: boolean;
  index?: number;
  item?: TableItem;
  onClick?: TableProps['onClick'];
}
