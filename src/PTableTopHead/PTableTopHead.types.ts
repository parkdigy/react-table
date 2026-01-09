import { type ReactNode } from 'react';
import { type TableCellProps } from '@mui/material';
import { type PTableColumn, type PTableItem, type PTableProps } from '../PTable';

export interface PTableTopHeadRowColumn {
  colSpan?: number;
  rowSpan?: number;
  label?: ReactNode;
  align?: TableCellProps['align'];
}

export type PTableTopHeadRowColumnValue = PTableTopHeadRowColumn | false | undefined | null;

export interface PTableTopHeadProps<T extends PTableItem = PTableItem> {
  caption?: ReactNode;
  rows?: PTableTopHeadRowColumnValue[] | PTableTopHeadRowColumnValue[][];
  columns: PTableColumn<T>[];
  items?: T[];
  defaultAlign: PTableProps<T>['defaultAlign'];
  onCheckChange: (column: PTableColumn<T>, checked: boolean) => void;
}
