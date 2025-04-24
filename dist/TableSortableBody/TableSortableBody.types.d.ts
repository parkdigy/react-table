import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
import { TableBodyRowProps } from '../TableBodyRow';
export interface TableSortableBodyProps extends Pick<TableProps, 'showOddColor' | 'showEvenColor' | 'onGetBodyRowSx' | 'onGetBodyRowClassName' | 'onGetBodyRowStyle' | 'onGetBodyColumnClassName' | 'onGetBodyColumnSx' | 'onGetBodyColumnStyle' | 'defaultAlign' | 'defaultEllipsis' | 'sortable' | 'onClick'>, Pick<TableBodyRowProps, 'onCheckChange'> {
    items: (TableItem & {
        id: number | string;
    })[];
    columns: TableColumn[];
}
