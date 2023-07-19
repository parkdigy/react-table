import { createContext } from 'react';
import { TableContextDefaultValue, TableContextValue } from './TableContext.types';

const TableContext = createContext<TableContextValue>(TableContextDefaultValue);

export default TableContext;
