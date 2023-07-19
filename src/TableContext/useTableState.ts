import TableContext from './TableContext';
import { TableContextValue } from './TableContext.types';
import { useContext } from 'react';

export default function useTableState(): TableContextValue {
  const value = useContext(TableContext);
  if (value === undefined) {
    throw new Error('useFormState should be used within TableContext.Provider');
  }
  return value;
}
