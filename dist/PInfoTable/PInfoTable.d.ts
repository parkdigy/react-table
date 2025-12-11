import React from 'react';
import { PInfoTableProps as Props, PInfoTableInfo } from './PInfoTable.types';
interface WithType<T = PInfoTableInfo> extends React.FC<Props<T>> {
    <T = PInfoTableInfo>(props: Props<T>): ReturnType<React.FC<Props<T>>>;
}
declare const PInfoTable: WithType;
export default PInfoTable;
