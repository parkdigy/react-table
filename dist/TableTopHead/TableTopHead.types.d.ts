import { ReactNode } from 'react';
import { TableCellProps } from '@mui/material';
import { TableColumn, TableProps } from '../Table/Table.types';
export interface TableTopHeadRowColumn {
    colSpan?: number;
    rowSpan?: number;
    label?: ReactNode;
    align?: TableCellProps['align'];
}
export type TableTopHeadRowColumnValue = TableTopHeadRowColumn | false | undefined | null;
export interface TableTopHeadProps {
    caption?: ReactNode;
    rows?: TableTopHeadRowColumnValue[] | TableTopHeadRowColumnValue[][];
    columns: TableColumn[];
    defaultAlign: TableProps['defaultAlign'];
    onCheckChange(column: TableColumn, checked: boolean): void;
}
export declare const TableTopHeadDefaultProps: {};
