import { type PTableSortableBodyProps } from '../PTableSortableBody';
import { type PTableItem } from '../PTable';

export interface PTableSortableBodyBlockProps<T extends PTableItem = PTableItem> extends PTableSortableBodyProps<T> {
  baseIndex: number;
}
