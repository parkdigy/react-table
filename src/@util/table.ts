import { TableColumn } from '../Table/Table.types';

export function getTableColumnAlign(column: TableColumn, defaultAlign: TableColumn['align']): TableColumn['align'] {
  switch (column.type) {
    case 'number':
      return column.align ? column.align : 'right';
    default:
      return column.align || defaultAlign;
  }
}
