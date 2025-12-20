import { PTableContextValue } from './PTableContext.types';
import { PTableItem } from '../PTable';
export default function useTableState<T extends PTableItem = PTableItem>(): PTableContextValue<T>;
