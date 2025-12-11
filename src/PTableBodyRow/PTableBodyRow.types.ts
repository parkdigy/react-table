import { TableCellProps, TableRowProps } from '@mui/material';
import { PTableColumn, PTableItem, PTableProps } from '../PTable';
import { PTableBodyCellProps } from '../PTableBodyCell';
import { PTableCommonSxProps } from '../@types';

export interface PTableBodyRowProps extends Omit<TableRowProps, 'id' | 'onClick'> {
  id: string | number;
  index: number;
  defaultAlign?: TableCellProps['align'];
  defaultEllipsis?: boolean;
  sortable?: boolean;
  columns: PTableColumn[];
  item: PTableItem;
  onClick: PTableProps['onClick'];
  onCheckChange: PTableBodyCellProps['onCheckChange'];
  onGetColumnClassName?: (
    column: PTableColumn,
    item: PTableItem,
    index: number
  ) => PTableCommonSxProps['className'] | undefined;
  onGetColumnStyle?: (
    column: PTableColumn,
    item: PTableItem,
    index: number
  ) => PTableCommonSxProps['style'] | undefined;
  onGetColumnSx?: (column: PTableColumn, item: PTableItem, index: number) => PTableCommonSxProps['sx'] | undefined;
}
