import { PTableItem, PTableProps } from './PTable.types';
import { v4 as uuid } from 'uuid';

export const makeSortableItems = (items?: PTableProps['items']) => {
  return items?.map<PTableItem & { id: number | string }>(({ id, ...item }, index) => {
    return { id: id == null ? `${uuid()}_${index}` : id, ...item };
  });
};
