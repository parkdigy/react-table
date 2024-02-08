import { ReactNode } from 'react';
import { TableCellProps, TooltipProps } from '@mui/material';
import { TablePaginationProps } from '../TablePagination/TablePagination.types';
import { CommonSxProps } from '../@types';
import { TableTopHeadProps } from '../TableTopHead';
export interface TableItem {
    [key: string]: any;
}
export interface TableColumn<T = TableItem> {
    id?: string;
    type?: 'text' | 'number' | 'tel' | 'date' | 'datetime' | 'date-hour' | 'date-minute' | 'img' | 'button' | 'buttons' | 'check';
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
    display?: {
        xs?: boolean;
        sm?: boolean;
        md?: boolean;
        lg?: boolean;
        xl?: boolean;
    };
    paddingLeft?: number;
    paddingRight?: number;
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
export interface TableProps<T = TableItem> extends CommonSxProps {
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
        className?: CommonSxProps['className'];
        style?: CommonSxProps['style'];
        sx?: CommonSxProps['sx'];
    };
    sortable?: boolean;
    onClick?(item: T, index: number): void;
    onGetBodyRowSx?(item: T, index: number): CommonSxProps['sx'] | undefined;
    onPageChange?(page: number): void;
    onSortChange?(items: T[]): void;
    onCheckChange?(columnId: string, items: T[]): void;
}
export declare const TableDefaultProps: Pick<TableProps, 'defaultAlign' | 'pagingAlign' | 'cellPadding'>;
export interface TableCommands<T = TableItem> {
    getColumns(): TableProps<T>['columns'];
    setColumns(columns: TableProps<T>['columns']): void;
    getItems(): TableProps<T>['items'];
    getPaging(): TableProps<T>['paging'];
    setItemsPaging(items: TableProps<T>['items'], paging: TableProps<T>['paging']): void;
    resetSort(): void;
    getCheckedItems(columnId: string): T[];
    scrollToTop(): void;
}
