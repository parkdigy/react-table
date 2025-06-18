import PTableContext from './PTableContext';
import { PTableContextValue } from './PTableContext.types';
import { useContext } from 'react';

export default function useTableState(): PTableContextValue {
  const value = useContext(PTableContext);
  if (value === undefined) {
    throw new Error('useFormState should be used within TableContext.Provider');
  }
  return value;
}
