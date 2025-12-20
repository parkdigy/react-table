import React, { CSSProperties, ReactNode } from 'react';
import { TableCellProps, TooltipProps } from '@mui/material';
import { PTablePaginationProps } from '../PTablePagination';
import { PTableCommonSxProps } from '../@types';
import { PTableTopHeadProps } from '../PTableTopHead';
/********************************************************************************************************************
 * PTableItem
 * ******************************************************************************************************************/
export interface PTableItem {
    [key: string]: any;
}
/********************************************************************************************************************
 * PTableProgressiveVisibleInfo
 * ******************************************************************************************************************/
export interface PTableProgressiveVisibleInfo {
    rowHeight: number;
    blockSize?: number;
    delay?: number;
}
/********************************************************************************************************************
 * PTableColumn
 * ******************************************************************************************************************/
export interface PTableColumn<T extends PTableItem = PTableItem> {
    id?: string;
    type?: 'text' | 'number' | 'tel' | 'date' | 'datetime' | 'date-hour' | 'date-minute' | 'business_no' | 'personal_no' | 'img' | 'button' | 'buttons' | 'check';
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
        className?: PTableCommonSxProps['className'];
        style?: PTableCommonSxProps['style'];
        backgroundColor?: CSSProperties['backgroundColor'];
        sx?: PTableCommonSxProps['sx'];
        onGetClassName?: (items?: T[]) => PTableCommonSxProps['className'];
        onGetStyle?: (items?: T[]) => PTableCommonSxProps['style'];
        onGetSx?: (items?: T[]) => PTableCommonSxProps['sx'];
        onRender?: (items?: T[]) => ReactNode;
    };
    footer?: {
        value?: ReactNode;
        className?: PTableCommonSxProps['className'];
        style?: PTableCommonSxProps['style'];
        backgroundColor?: CSSProperties['backgroundColor'];
        sx?: PTableCommonSxProps['sx'];
        onGetClassName?: (items?: T[]) => PTableCommonSxProps['className'];
        onGetStyle?: (items?: T[]) => PTableCommonSxProps['style'];
        onGetSx?: (items?: T[]) => PTableCommonSxProps['sx'];
        onRender?: (items?: T[]) => ReactNode;
    };
    className?: PTableCommonSxProps['className'];
    style?: PTableCommonSxProps['style'];
    backgroundColor?: CSSProperties['backgroundColor'];
    sx?: PTableCommonSxProps['sx'];
    onGetClassName?: (item: T, index: number) => PTableCommonSxProps['className'];
    onGetStyle?: (item: T, index: number) => PTableCommonSxProps['style'];
    onGetSx?: (item: T, index: number) => PTableCommonSxProps['sx'];
    onHide?: (item: T, index: number) => boolean;
    onGetTooltip?: (item: T, index: number) => ReactNode;
    onRender?: (item: T, index: number) => ReactNode;
    onClick?: (item: T, index: number) => void;
    onInitChecked?: (item: T) => boolean;
    onCheckDisabled?: (item: T) => boolean;
    onCheckChange?: (item: T, checked: boolean) => void;
    onCheckDisabledChange?: (item: T, checkDisabled: boolean) => void;
}
export type PTableColumns<T extends PTableItem = PTableItem> = (PTableColumn<T> | false | undefined | null)[];
/********************************************************************************************************************
 * TableProps
 * ******************************************************************************************************************/
export interface PTableProps<T extends PTableItem = PTableItem> extends PTableCommonSxProps {
    ref?: React.Ref<PTableCommands<T>>;
    caption?: ReactNode;
    topHeadRows?: PTableTopHeadProps<T>['rows'];
    columns?: PTableColumns<T>;
    defaultAlign?: TableCellProps['align'];
    defaultEllipsis?: boolean;
    stickyHeader?: boolean;
    items?: T[];
    paging?: PTablePaginationProps['paging'];
    pagingAlign?: PTablePaginationProps['align'];
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
        className?: PTableCommonSxProps['className'];
        style?: PTableCommonSxProps['style'];
        sx?: PTableCommonSxProps['sx'];
    };
    progressiveVisible?: PTableProgressiveVisibleInfo;
    sortable?: boolean;
    onClick?: (item: T, index: number) => void;
    onGetBodyRowClassName?: (item: T, index: number) => PTableCommonSxProps['className'] | undefined;
    onGetBodyRowStyle?: (item: T, index: number) => PTableCommonSxProps['style'] | undefined;
    onGetBodyRowSx?: (item: T, index: number) => PTableCommonSxProps['sx'] | undefined;
    onGetBodyColumnClassName?: (column: PTableColumn<T>, item: T, index: number) => PTableCommonSxProps['className'] | undefined;
    onGetBodyColumnStyle?: (column: PTableColumn<T>, item: T, index: number) => PTableCommonSxProps['style'] | undefined;
    onGetBodyColumnSx?: (column: PTableColumn<T>, item: T, index: number) => PTableCommonSxProps['sx'] | undefined;
    onPageChange?: (page: number) => void;
    onSortChange?: (items: T[]) => void;
    onCheckChange?: (columnId: string, items: T[]) => void;
}
/********************************************************************************************************************
 * PTableCommands
 * ******************************************************************************************************************/
export interface PTableCommands<T extends PTableItem = PTableItem> {
    getColumns: () => PTableProps<T>['columns'];
    setColumns: (columns: PTableProps<T>['columns']) => void;
    getItems: () => PTableProps<T>['items'];
    setItems: (items: PTableProps<T>['items']) => void;
    getPaging: () => PTableProps<T>['paging'];
    setItemsPaging: (items: PTableProps<T>['items'], paging: PTableProps<T>['paging']) => void;
    resetSort: () => void;
    getCheckedItems: (columnId: string) => T[];
    getChecked: (itemKey: string, itemValue: any, columnId: string) => boolean;
    setChecked: (itemKey: string, itemValue: any, columnId: string, checked: boolean) => void;
    toggleChecked: (itemKey: string, itemValue: any, columnId: string) => void;
    setCheckedAll: (columnId: string, checked: boolean) => void;
    scrollToTop: () => void;
}
