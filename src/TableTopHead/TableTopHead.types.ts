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
  caption?: ReactNode;
  onHeightChange?(height: number): void;
}

export const TableTopHeadDefaultProps = {};
