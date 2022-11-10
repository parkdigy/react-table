import React from 'react';
import { TableProps, TableCommands } from './Table.types';
import 'simplebar-react/dist/simplebar.min.css';
declare const Table: React.ForwardRefExoticComponent<TableProps<import("./Table.types").TableItem> & React.RefAttributes<TableCommands>>;
export default Table;
