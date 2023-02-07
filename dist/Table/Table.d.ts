import React from 'react';
import { TableProps, TableCommands, TableItem } from './Table.types';
import 'simplebar-react/dist/simplebar.min.css';
declare const Table: React.ForwardRefExoticComponent<TableProps<TableItem> & React.RefAttributes<TableCommands>>;
export default Table;
