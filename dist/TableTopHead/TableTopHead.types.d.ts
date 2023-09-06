import { ReactNode } from 'react';
import { TableCellProps } from '@mui/material';
export interface TableTopHeadRowColumn {
    colSpan?: number;
    rowSpan?: number;
    label?: ReactNode;
    align?: TableCellProps['align'];
}
export type TableTopHeadRowColumnValue = TableTopHeadRowColumn | false | undefined | null;
export interface TableTopHeadProps {
    columnLength: number;
    rows?: TableTopHeadRowColumnValue[] | TableTopHeadRowColumnValue[][];
    onHeightChange?(height: number): void;
}
export declare const TableTopHeadDefaultProps: {};
