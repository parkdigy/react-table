import { ReactNode } from 'react';
import { PTableContextValue } from '../PTableContext';
import { PTableItem } from '../PTable';

export interface PTableContextProviderProps<T extends PTableItem = PTableItem> {
  value: PTableContextValue<T>;
  children: ReactNode;
}
