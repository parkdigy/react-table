import { TableCellProps, TableRowProps } from '@mui/material';
import { TableColumn, TableItem, TableProps } from '../Table';
import { TableBodyCellProps } from '../TableBodyCell';
import { TableCommonSxProps } from '../@types';

export interface TableBodyRowProps extends Omit<TableRowProps, 'id' | 'onClick'> {
  id: string | number;
  index: number;
  defaultAlign?: TableCellProps['align'];
  defaultEllipsis?: boolean;
  sortable?: boolean;
  columns: TableColumn[];
  item: TableItem;
  onClick: TableProps['onClick'];
  onCheckChange: TableBodyCellProps['onCheckChange'];
  onGetColumnClassName?(
    column: TableColumn,
    item: TableItem,
    index: number
  ): TableCommonSxProps['className'] | undefined;
  onGetColumnStyle?(column: TableColumn, item: TableItem, index: number): TableCommonSxProps['style'] | undefined;
  onGetColumnSx?(column: TableColumn, item: TableItem, index: number): TableCommonSxProps['sx'] | undefined;
}
