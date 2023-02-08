import { ReactNode } from 'react';
import { TableCellProps, TooltipProps } from '@mui/material';
import { TablePaginationProps } from '../TablePagination/TablePagination.types';
import { CommonSxProps } from '../@types';

//--------------------------------------------------------------------------------------------------------------------

export interface TableItem {
  [key: string]: any;
}

//--------------------------------------------------------------------------------------------------------------------

export interface TableColumn<T = TableItem> {
  type?: 'text' | 'number' | 'date' | 'datetime' | 'img' | 'button' | 'buttons';
  label?: ReactNode;
  name?: string;
  align?: TableCellProps['align'];
  width?: string | number;
  minWidth?: string | number;
  ellipsis?: boolean;
  dateFormat?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'title'>;
  head?: {
    className?: CommonSxProps['className'];
    style?: CommonSxProps['style'];
    sx?: CommonSxProps['sx'];
    onGetClassName?(): CommonSxProps['className'];
    onGetStyle?(): CommonSxProps['style'];
    onGetSx?(): CommonSxProps['sx'];
    onRender?(): ReactNode;
  };
  footer?: {
    value?: ReactNode;
    className?: CommonSxProps['className'];
    style?: CommonSxProps['style'];
    sx?: CommonSxProps['sx'];
    onGetClassName?(): CommonSxProps['className'];
    onGetStyle?(): CommonSxProps['style'];
    onGetSx?(): CommonSxProps['sx'];
    onRender?(): ReactNode;
  };
  className?: CommonSxProps['className'];
  style?: CommonSxProps['style'];
  sx?: CommonSxProps['sx'];
  onGetClassName?(item: T, index: number): CommonSxProps['className'];
  onGetStyle?(item: T, index: number): CommonSxProps['style'];
  onGetSx?(item: T, index: number): CommonSxProps['sx'];
  onGetTooltip?(item: T, index: number): ReactNode;
  onRender?(item: T, index: number): ReactNode;
  onClick?(item: T, index: number): void;
}

//--------------------------------------------------------------------------------------------------------------------

export interface TableProps<T = TableItem> extends CommonSxProps {
  columns?: (TableColumn<T> | false | undefined | null)[];
  defaultAlign?: TableCellProps['align'];
  defaultEllipsis?: boolean;
  stickyHeader?: boolean;
  items?: T[];
  paging?: TablePaginationProps['paging'];
  pagingAlign?: TablePaginationProps['align'];
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  showOddColor?: boolean;
  showEvenColor?: boolean;
  cellPadding?: string | number;
  footer?: boolean;
  noData?: ReactNode;
  pagination?: {
    className?: CommonSxProps['className'];
    style?: CommonSxProps['style'];
    sx?: CommonSxProps['sx'];
  };
  sortable?: boolean;
  onClick?(item: T, index: number): void;
  onGetBodyRowSx?(item: T, index: number): CommonSxProps['sx'] | undefined;
  onPageChange?(page: number): void;
  onSortChange?(items: T[]): void;
}

export const TableDefaultProps: Pick<TableProps, 'defaultAlign' | 'pagingAlign' | 'cellPadding'> = {
  defaultAlign: 'left',
  pagingAlign: 'center',
  cellPadding: 13,
};

//--------------------------------------------------------------------------------------------------------------------

export interface TableCommands {
  getColumns(): TableProps['columns'];
  setColumns(columns: TableProps['columns']): void;
  getItems(): TableProps['items'];
  getPaging(): TableProps['paging'];
  setItemsPaging(items: TableProps['items'], paging: TableProps['paging']): void;
}
