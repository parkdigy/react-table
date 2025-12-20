import PTableContext from './PTableContext';
import { PTableContextValue } from './PTableContext.types';
import { useContext } from 'react';
import { empty } from '@pdg/compare';
import { PTableItem } from '../PTable';

export default function useTableState<T extends PTableItem = PTableItem>(): PTableContextValue<T> {
  const value = useContext(PTableContext);
  if (empty(value)) {
    throw new Error('useTableState should be used within TableContext.Provider');
  }
  return value as unknown as PTableContextValue<T>;
}
