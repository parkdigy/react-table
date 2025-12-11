import React from 'react';
import { PSearchTableProps, PSearchTableCommands } from './PSearchTable.types';
import { PTableItem } from '../PTable';
interface WithForwardRefType<T = PTableItem> extends React.FC<PSearchTableProps<T>> {
    <T = PTableItem>(props: PSearchTableProps<T> & React.RefAttributes<PSearchTableCommands<T>>): ReturnType<React.FC<PSearchTableProps<T>>>;
}
declare const PSearchTable: WithForwardRefType;
export default PSearchTable;
