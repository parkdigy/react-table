import { CSSProperties, ReactNode } from 'react';
import { TableCellProps, TooltipProps } from '@mui/material';
import { TablePaginationProps } from '../TablePagination/TablePagination.types';
import { TableCommonSxProps } from '../@types';
import { TableTopHeadProps } from '../TableTopHead';

/********************************************************************************************************************
 * TableItem
 * ******************************************************************************************************************/

export interface TableItem {
  [key: string]: any;
}

/********************************************************************************************************************
 * TableProgressiveVisibleInfo
 * ******************************************************************************************************************/

export interface TableProgressiveVisibleInfo {
  rowHeight: number;
  blockSize?: number; // default=20
  delay?: number; // default=300
}

/********************************************************************************************************************
 * TableColumn
 * ******************************************************************************************************************/

export interface TableColumn<T = TableItem> {
  id?: string;
  type?:
    | 'text'
    | 'number'
    | 'tel'
    | 'date'
    | 'datetime'
    | 'date-hour'
    | 'date-minute'
    | 'business_no'
    | 'personal_no'
    | 'img'
    | 'button'
    | 'buttons'
    | 'check';
  label?: ReactNode;
  name?: keyof T;
  align?: TableCellProps['align'];
  width?: string | number;
  minWidth?: string | number;
  ellipsis?: boolean;
  dateFormat?: string;
  dateTwoLine?: boolean;
  hideAllCheck?: boolean;
  numberPrefix?: string;
  numberSuffix?: string;
  tooltipProps?: Omit<TooltipProps, 'children' | 'title'>;
  display?: { xs?: boolean; sm?: boolean; md?: boolean; lg?: boolean; xl?: boolean };
  paddingLeft?: number;
  paddingRight?: number;
  head?: {
    className?: TableCommonSxProps['className'];
    style?: TableCommonSxProps['style'];
    backgroundColor?: CSSProperties['backgroundColor'];
    sx?: TableCommonSxProps['sx'];
    onGetClassName?(items?: T[]): TableCommonSxProps['className'];
    onGetStyle?(items?: T[]): TableCommonSxProps['style'];
    onGetSx?(items?: T[]): TableCommonSxProps['sx'];
    onRender?(items?: T[]): ReactNode;
  };
  footer?: {
    value?: ReactNode;
    className?: TableCommonSxProps['className'];
    style?: TableCommonSxProps['style'];
    backgroundColor?: CSSProperties['backgroundColor'];
    sx?: TableCommonSxProps['sx'];
    onGetClassName?(items?: T[]): TableCommonSxProps['className'];
    onGetStyle?(items?: T[]): TableCommonSxProps['style'];
    onGetSx?(items?: T[]): TableCommonSxProps['sx'];
    onRender?(items?: T[]): ReactNode;
  };
  className?: TableCommonSxProps['className'];
  style?: TableCommonSxProps['style'];
  backgroundColor?: CSSProperties['backgroundColor'];
  sx?: TableCommonSxProps['sx'];
  onGetClassName?(item: T, index: number): TableCommonSxProps['className'];
  onGetStyle?(item: T, index: number): TableCommonSxProps['style'];
  onGetSx?(item: T, index: number): TableCommonSxProps['sx'];
  onHide?(item: T, index: number): boolean;
  onGetTooltip?(item: T, index: number): ReactNode;
  onRender?(item: T, index: number): ReactNode;
  onClick?(item: T, index: number): void;
  onInitChecked?(item: T): boolean;
  onCheckDisabled?(item: T): boolean;
  onCheckChange?(item: T, checked: boolean): void;
  onCheckDisabledChange?(item: T, checkDisabled: boolean): void;
}

export type TableColumns<T = TableItem> = (TableColumn<T> | false | undefined | null)[];

/********************************************************************************************************************
 * TableProps
 * ******************************************************************************************************************/

export interface TableProps<T = TableItem> extends TableCommonSxProps {
  caption?: ReactNode;
  topHeadRows?: TableTopHeadProps['rows'];
  columns?: TableColumns<T>;
  defaultAlign?: TableCellProps['align'];
  defaultEllipsis?: boolean;
  stickyHeader?: boolean;
  items?: T[];
  paging?: TablePaginationProps['paging'];
  pagingAlign?: TablePaginationProps['align'];
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  fullHeight?: boolean;
  showOddColor?: boolean;
  showEvenColor?: boolean;
  cellPadding?: string | number;
  footer?: boolean;
  noData?: ReactNode;
  pagination?: {
    className?: TableCommonSxProps['className'];
    style?: TableCommonSxProps['style'];
    sx?: TableCommonSxProps['sx'];
  };
  progressiveVisible?: TableProgressiveVisibleInfo;
  sortable?: boolean;
  onClick?(item: T, index: number): void;
  onGetBodyRowClassName?(item: T, index: number): TableCommonSxProps['className'] | undefined;
  onGetBodyRowStyle?(item: T, index: number): TableCommonSxProps['style'] | undefined;
  onGetBodyRowSx?(item: T, index: number): TableCommonSxProps['sx'] | undefined;
  onGetBodyColumnClassName?(
    column: TableColumn<T>,
    item: T,
    index: number
  ): TableCommonSxProps['className'] | undefined;
  onGetBodyColumnStyle?(column: TableColumn<T>, item: T, index: number): TableCommonSxProps['style'] | undefined;
  onGetBodyColumnSx?(column: TableColumn<T>, item: T, index: number): TableCommonSxProps['sx'] | undefined;
  onPageChange?(page: number): void;
  onSortChange?(items: T[]): void;
  onCheckChange?(columnId: string, items: T[]): void;
}

/********************************************************************************************************************
 * TableCommands
 * ******************************************************************************************************************/

export interface TableCommands<T = TableItem> {
  getColumns(): TableProps<T>['columns'];
  setColumns(columns: TableProps<T>['columns']): void;
  getItems(): TableProps<T>['items'];
  setItems(items: TableProps<T>['items']): void;
  getPaging(): TableProps<T>['paging'];
  setItemsPaging(items: TableProps<T>['items'], paging: TableProps<T>['paging']): void;
  resetSort(): void;
  getCheckedItems(columnId: string): T[];
  getChecked(itemKey: string, itemValue: any, columnId: string): boolean;
  setChecked(itemKey: string, itemValue: any, columnId: string, checked: boolean): void;
  toggleChecked(itemKey: string, itemValue: any, columnId: string): void;
  setCheckedAll(columnId: string, checked: boolean): void;
  scrollToTop(): void;
}
