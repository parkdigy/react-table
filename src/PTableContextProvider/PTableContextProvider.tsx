import React from 'react';
import { PTableContextProviderProps as Props } from './PTableContextProvider.types';
import PTableContext from '../PTableContext';
import { PTableItem } from '../PTable';

function PTableContextProvider<T extends PTableItem = PTableItem>({ children, value }: Props<T>) {
  return <PTableContext.Provider value={value as any}>{children}</PTableContext.Provider>;
}

export default PTableContextProvider;
