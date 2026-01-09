import { createContext } from 'react';
import { type PTableContextValue } from './PTableContext.types';

const PTableContext = createContext<PTableContextValue>({} as PTableContextValue);

export default PTableContext;
