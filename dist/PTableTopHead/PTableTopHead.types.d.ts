import { ReactNode } from 'react';
import { TableCellProps } from '@mui/material';
import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
export interface PTableTopHeadRowColumn {
    colSpan?: number;
    rowSpan?: number;
    label?: ReactNode;
    align?: TableCellProps['align'];
}
export type PTableTopHeadRowColumnValue = PTableTopHeadRowColumn | false | undefined | null;
export interface PTableTopHeadProps<T = PTableItem> {
    caption?: ReactNode;
    rows?: PTableTopHeadRowColumnValue[] | PTableTopHeadRowColumnValue[][];
    columns: PTableColumn[];
    items?: T[];
    defaultAlign: PTableProps['defaultAlign'];
    onCheckChange: (column: PTableColumn, checked: boolean) => void;
}
