import { PTableSortableBodyProps } from '../PTableSortableBody';
import { PTableItem } from '../PTable';
export interface PTableSortableBodyBlockProps<T extends PTableItem = PTableItem> extends PTableSortableBodyProps<T> {
    baseIndex: number;
}
