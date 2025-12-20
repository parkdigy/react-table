import { PTableColumn, PTableItem, PTableProps } from '../PTable';
import { PTableCommonSxProps } from '../@types';
import React from 'react';

export interface PTableBodyCellCommands {
  setChecked: (checked: boolean) => void;
  setCheckDisabled: (disabled: boolean) => void;
}

export interface PTableBodyCellProps<T extends PTableItem = PTableItem> {
  ref?: React.Ref<HTMLTableCellElement>;
  className?: PTableCommonSxProps['className'];
  style?: PTableCommonSxProps['style'];
  sx?: PTableCommonSxProps['sx'];
  index: number;
  item: T;
  column: PTableColumn<T>;
  defaultAlign?: PTableProps<T>['defaultAlign'];
  defaultEllipsis?: boolean;
  onClick: PTableProps<T>['onClick'];
  onCheckChange: (item: T, column: PTableColumn<T>, checked: boolean) => void;
}
