import { ReactNode } from 'react';
import { PTableContextValue } from '../PTableContext';

export interface PTableContextProviderProps {
  value: PTableContextValue;
  children: ReactNode;
}
