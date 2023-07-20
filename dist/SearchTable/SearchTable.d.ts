import React from 'react';
import { SearchTableProps, SearchTableCommands } from './SearchTable.types';
import { TableItem } from '../Table';
interface WithForwardRefType<T = TableItem> extends React.FC<SearchTableProps<T>> {
    <T = TableItem>(props: SearchTableProps<T> & React.RefAttributes<SearchTableCommands<T>>): ReturnType<React.FC<SearchTableProps<T>>>;
}
declare const SearchTable: WithForwardRefType;
export default SearchTable;
