import React from 'react';
import { InfoTableProps as Props, InfoTableInfo } from './InfoTable.types';
interface WithType<T = InfoTableInfo> extends React.FC<Props<T>> {
    <T = InfoTableInfo>(props: Props<T>): ReturnType<React.FC<Props<T>>>;
}
declare const InfoTable: WithType;
export default InfoTable;
