import { ReactNode } from 'react';
import { TableContextValue } from '../TableContext';
export interface TableContextProviderProps {
    value: TableContextValue;
    children: ReactNode;
}
