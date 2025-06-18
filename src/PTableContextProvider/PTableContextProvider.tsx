import React from 'react';
import { PTableContextProviderProps as Props } from './PTableContextProvider.types';
import PTableContext from '../PTableContext';

const PTableContextProvider: React.FC<Props> = ({ children, value }) => {
  return <PTableContext.Provider value={value}>{children}</PTableContext.Provider>;
};

export default PTableContextProvider;
