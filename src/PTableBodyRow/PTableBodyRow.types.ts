import { type TableCellProps, type TableRowProps } from '@mui/material';
import { type PTableColumn, type PTableItem, type PTableProps } from '../PTable';
import { type PTableBodyCellProps } from '../PTableBodyCell';
import { type PTableCommonSxProps } from '../@types';

export interface PTableBodyRowProps<T extends PTableItem = PTableItem> extends Omit<TableRowProps, 'id' | 'onClick'> {
  id: string | number;
  index: number;
  defaultAlign?: TableCellProps['align'];
  defaultEllipsis?: boolean;
  sortable?: boolean;
  columns: PTableColumn<T>[];
  item: T;
  onClick: PTableProps<T>['onClick'];
  onCheckChange: PTableBodyCellProps<T>['onCheckChange'];
  onGetColumnClassName?: (
    column: PTableColumn<T>,
    item: T,
    index: number
  ) => PTableCommonSxProps['className'] | undefined;
  onGetColumnStyle?: (column: PTableColumn<T>, item: T, index: number) => PTableCommonSxProps['style'] | undefined;
  onGetColumnSx?: (column: PTableColumn<T>, item: T, index: number) => PTableCommonSxProps['sx'] | undefined;
}
