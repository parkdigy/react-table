import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
import { PTableCommonSxProps } from '../@types';

export interface PTableCommonCellProps extends PTableCommonSxProps {
  type: 'head' | 'body' | 'footer';
  column: PTableColumn;
  defaultAlign?: PTableProps['defaultAlign'];
  defaultEllipsis?: boolean;
  index?: number;
  item?: PTableItem;
  onClick?: PTableProps['onClick'];
}
