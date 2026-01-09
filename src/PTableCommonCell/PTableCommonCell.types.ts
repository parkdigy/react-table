import React from 'react';
import { type PTableColumn, type PTableItem, type PTableProps } from '../PTable/PTable.types';
import { type PTableCommonSxProps } from '../@types';

export interface PTableCommonCellProps<T extends PTableItem = PTableItem>
  extends PTableCommonSxProps, Pick<PTableProps<T>, 'defaultAlign' | 'onClick'> {
  ref?: React.Ref<HTMLTableCellElement>;
  type: 'head' | 'body' | 'footer';
  column: PTableColumn<T>;
  defaultEllipsis?: boolean;
  index?: number;
  item?: T;
}
