import { PTableItem, PTableProps } from './PTable.types';
import { v4 as uuid } from 'uuid';

export function makeSortableItems<T extends PTableItem>(items?: PTableProps<T>['items']) {
  return items?.map<T & { id: number | string }>((item, index) => {
    return { id: item.id == null ? `${uuid()}_${index}` : item.id, ...item };
  });
}
