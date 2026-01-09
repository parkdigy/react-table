import React from 'react';
import { type PTableProps, type PTableCommands, type PTableItem } from '../PTable';
import { type PFormValueMap, type PSearchCommands, type PSearchProps } from '@pdg/react-form';
import { type ReactNode } from 'react';
import { type PTableCommonSxProps } from '../@types';

export interface PSearchTableSearchInfo {
  ref?: PSearchTableSearchProps['ref'];
  searchGroups?: PSearchTableSearchProps['searchGroups'];
  props?: Omit<PSearchTableSearchProps, 'ref' | 'searchGroups'>;
}

export interface PSearchTableTableInfo<T extends PTableItem = PTableItem> {
  ref?: PSearchTableTableProps<T>['ref'];
  props?: Omit<PSearchTableTableProps<T>, 'ref'>;
}

export interface PSearchTableData<T extends PTableItem = PTableItem> {
  items: PTableProps<T>['items'];
  paging?: PTableProps<T>['paging'];
}

export interface PSearchTableSearchProps extends Omit<PSearchProps, 'ref' | 'color' | 'autoSubmit' | 'onSubmit'> {
  ref?: React.Ref<PSearchCommands>;
  searchGroups?: ReactNode;
}

export interface PSearchTableTableProps<T extends PTableItem = PTableItem> extends Omit<
  PTableProps<T>,
  'ref' | 'items' | 'paging' | 'onPageChange'
> {
  ref?: React.Ref<PTableCommands<T>>;
}

export interface PSearchTableProps<T extends PTableItem = PTableItem> extends PTableCommonSxProps {
  ref?: React.Ref<PSearchTableCommands<T>>;
  color?: PSearchProps['color'];
  hash?: boolean;
  stickyHeader?: boolean;
  fullHeight?: boolean;
  search?: PSearchTableSearchProps;
  table: PSearchTableTableProps<T>;
  betweenSearchTableComponent?: ReactNode;
  onGetData?(data: PFormValueMap): Promise<PSearchTableData<T>>;
  onRequestHashChange?: (hash: string) => void;
}

export interface PSearchTableCommands<T extends PTableItem = PTableItem> {
  reload: (page?: number) => void;
  getLastLoadData: () => PFormValueMap;
  getSearch: () => PSearchCommands | undefined;
  getTable: () => PTableCommands<T> | undefined;
}
