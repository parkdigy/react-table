import { createContext } from 'react';
import { PTableContextDefaultValue, PTableContextValue } from './PTableContext.types';

const PTableContext = createContext<PTableContextValue>(PTableContextDefaultValue);

export default PTableContext;
