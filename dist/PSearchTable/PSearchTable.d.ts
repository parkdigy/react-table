import React from 'react';
import { PSearchTableProps as Props } from './PSearchTable.types';
import { PTableItem } from '../PTable';
declare function PSearchTable<T extends PTableItem = PTableItem>({ ref, className, style: initStyle, sx, color, hash, stickyHeader, fullHeight, search, table, betweenSearchTableComponent, onGetData, onRequestHashChange, }: Props<T>): React.JSX.Element;
export default PSearchTable;
