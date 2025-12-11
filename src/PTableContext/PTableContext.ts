import { createContext } from 'react';
import { PTableContextValue } from './PTableContext.types';

const PTableContext = createContext<PTableContextValue>({} as PTableContextValue);

export default PTableContext;
