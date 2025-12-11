import PTableContext from './PTableContext';
import { PTableContextValue } from './PTableContext.types';
import { useContext } from 'react';
import { empty } from '@pdg/compare';

export default function useTableState(): PTableContextValue {
  const value = useContext(PTableContext);
  if (empty(value)) {
    throw new Error('useTableState should be used within TableContext.Provider');
  }
  return value;
}
