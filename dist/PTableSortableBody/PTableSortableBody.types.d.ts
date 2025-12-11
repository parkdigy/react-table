import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
import { PTableBodyRowProps } from '../PTableBodyRow';
export interface PTableSortableBodyProps extends Pick<PTableProps, 'showOddColor' | 'showEvenColor' | 'onGetBodyRowSx' | 'onGetBodyRowClassName' | 'onGetBodyRowStyle' | 'onGetBodyColumnClassName' | 'onGetBodyColumnSx' | 'onGetBodyColumnStyle' | 'defaultAlign' | 'defaultEllipsis' | 'sortable' | 'onClick'>, Pick<PTableBodyRowProps, 'onCheckChange'> {
    items: (PTableItem & {
        id: number | string;
    })[];
    columns: PTableColumn[];
}
