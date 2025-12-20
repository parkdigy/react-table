import { TableCellProps, TableRowProps } from '@mui/material';
import { PTableColumn, PTableItem, PTableProps } from '../PTable';
import { PTableBodyCellProps } from '../PTableBodyCell';
import { PTableCommonSxProps } from '../@types';

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
