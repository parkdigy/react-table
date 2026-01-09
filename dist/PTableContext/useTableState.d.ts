import { type PTableContextValue } from './PTableContext.types';
import { type PTableItem } from '../PTable';
export default function useTableState<T extends PTableItem = PTableItem>(): PTableContextValue<T>;
