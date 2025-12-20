import { PTableColumn, PTableItem, PTableProps } from '../PTable';
import { PTableBodyRowProps } from '../PTableBodyRow';

export interface PTableSortableBodyProps<T extends PTableItem = PTableItem>
  extends
    Pick<
      PTableProps<T>,
      | 'showOddColor'
      | 'showEvenColor'
      | 'onGetBodyRowSx'
      | 'onGetBodyRowClassName'
      | 'onGetBodyRowStyle'
      | 'onGetBodyColumnClassName'
      | 'onGetBodyColumnSx'
      | 'onGetBodyColumnStyle'
      | 'defaultAlign'
      | 'defaultEllipsis'
      | 'sortable'
      | 'onClick'
    >,
    Pick<PTableBodyRowProps<T>, 'onCheckChange'> {
  items: (T & { id: number | string })[];
  columns: PTableColumn<T>[];
}
