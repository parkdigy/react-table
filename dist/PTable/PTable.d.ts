import React from 'react';
import { PTableProps, PTableCommands, PTableItem } from './PTable.types';
interface WithForwardRefType<T = PTableItem> extends React.FC<PTableProps<T>> {
    <T = PTableItem>(props: PTableProps<T> & React.RefAttributes<PTableCommands<T>>): ReturnType<React.FC<PTableProps<T>>>;
}
declare const PTable: WithForwardRefType;
export default PTable;
