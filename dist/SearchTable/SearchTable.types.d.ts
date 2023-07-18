import React from 'react';
import { TableProps, TableCommands, TableItem } from '../Table';
import { FormValueMap, SearchCommands, SearchProps } from '@pdg/react-form';
import { ReactNode } from 'react';
import { CommonSxProps } from '../@types';
export interface SearchTableData {
    items: TableProps['items'];
    paging?: TableProps['paging'];
}
export interface SearchTableSearchProps extends Omit<SearchProps, 'ref' | 'color' | 'autoSubmit' | 'onSubmit'> {
    ref?: React.ForwardedRef<SearchCommands>;
    searchGroups?: ReactNode;
}
export interface SearchTableTableProps<T = TableItem> extends Omit<TableProps<T>, 'ref' | 'items' | 'paging' | 'onPageChange'> {
    ref?: React.ForwardedRef<TableCommands>;
}
export interface SearchTableProps extends CommonSxProps {
    color?: SearchProps['color'];
    hash?: boolean;
    stickyHeader?: boolean;
    fullHeight?: boolean;
    search?: SearchTableSearchProps;
    table: SearchTableTableProps;
    betweenSearchTableComponent?: ReactNode;
    onGetData?(data: FormValueMap): Promise<SearchTableData>;
    onRequestHashChange?(hash: string): void;
}
export declare const SearchTableDefaultProps: {};
export interface SearchTableCommands {
    reload(page?: number): void;
    getLastLoadData(): FormValueMap;
    getSearch(): SearchCommands | undefined;
    getTable(): TableCommands | undefined;
}
