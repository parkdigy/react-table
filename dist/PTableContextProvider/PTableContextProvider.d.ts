import React from 'react';
import { type PTableContextProviderProps as Props } from './PTableContextProvider.types';
import { type PTableItem } from '../PTable';
declare function PTableContextProvider<T extends PTableItem = PTableItem>({ children, value }: Props<T>): React.JSX.Element;
export default PTableContextProvider;
