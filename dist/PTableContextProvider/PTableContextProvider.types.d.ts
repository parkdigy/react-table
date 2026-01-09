import { type ReactNode } from 'react';
import { type PTableContextValue } from '../PTableContext';
import { type PTableItem } from '../PTable';
export interface PTableContextProviderProps<T extends PTableItem = PTableItem> {
    value: PTableContextValue<T>;
    children: ReactNode;
}
