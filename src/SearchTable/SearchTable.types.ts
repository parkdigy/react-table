import React from 'react';
import { TableProps, TableCommands, TableItem } from '../Table';
import { FormValueMap, SearchCommands, SearchProps } from '@pdg/react-form';
import { ReactNode } from 'react';
import { TableCommonSxProps } from '../@types';

export interface SearchInfo {
  ref?: SearchTableSearchProps['ref'];
  searchGroups?: SearchTableSearchProps['searchGroups'];
  props?: Omit<SearchTableSearchProps, 'ref' | 'searchGroups'>;
}

export interface TableInfo {
  ref?: SearchTableTableProps['ref'];
  props?: Omit<SearchTableTableProps, 'ref'>;
}

export interface SearchTableData<T = TableItem> {
  items: TableProps<T>['items'];
  paging?: TableProps<T>['paging'];
}

export interface SearchTableSearchProps extends Omit<SearchProps, 'ref' | 'color' | 'autoSubmit' | 'onSubmit'> {
  ref?: React.ForwardedRef<SearchCommands>;
  searchGroups?: ReactNode;
}

export interface SearchTableTableProps<T = TableItem>
  extends Omit<TableProps<T>, 'ref' | 'items' | 'paging' | 'onPageChange'> {
  ref?: React.ForwardedRef<TableCommands<T>>;
}

export interface SearchTableProps<T = TableItem> extends TableCommonSxProps {
  color?: SearchProps['color'];
  hash?: boolean;
  stickyHeader?: boolean;
  fullHeight?: boolean;
  search?: SearchTableSearchProps;
  table: SearchTableTableProps<T>;
  betweenSearchTableComponent?: ReactNode;
  onGetData?(data: FormValueMap): Promise<SearchTableData<T>>;
  onRequestHashChange?(hash: string): void;
}

export interface SearchTableCommands<T = TableItem> {
  reload(page?: number): void;
  getLastLoadData(): FormValueMap;
  getSearch(): SearchCommands | undefined;
  getTable(): TableCommands<T> | undefined;
}
