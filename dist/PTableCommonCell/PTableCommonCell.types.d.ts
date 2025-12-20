import React from 'react';
import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
import { PTableCommonSxProps } from '../@types';
export interface PTableCommonCellProps<T extends PTableItem = PTableItem> extends PTableCommonSxProps, Pick<PTableProps<T>, 'defaultAlign' | 'onClick'> {
    ref?: React.Ref<HTMLTableCellElement>;
    type: 'head' | 'body' | 'footer';
    column: PTableColumn<T>;
    defaultEllipsis?: boolean;
    index?: number;
    item?: T;
}
