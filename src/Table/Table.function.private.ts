import { TableItem, TableProps } from './Table.types';
import { v4 as uuid } from 'uuid';

export const makeSortableItems = (items?: TableProps['items']) => {
  return items?.map<TableItem & { id: number | string }>(({ id, ...item }, index) => {
    return { id: id == null ? `${uuid()}_${index}` : id, ...item };
  });
};
