import React from 'react';
import { TableProps, TableCommands, TableItem } from './Table.types';
interface WithForwardRefType<T = TableItem> extends React.FC<TableProps<T>> {
    <T = TableItem>(props: TableProps<T> & React.RefAttributes<TableCommands<T>>): ReturnType<React.FC<TableProps<T>>>;
}
declare const Table: WithForwardRefType;
export default Table;
