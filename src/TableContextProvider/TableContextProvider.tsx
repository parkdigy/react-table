import React from 'react';
import { TableContextProviderProps as Props } from './TableContextProvider.types';
import TableContext from '../TableContext';

const TableContextProvider: React.FC<Props> = ({ children, value }) => {
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
};

export default TableContextProvider;
