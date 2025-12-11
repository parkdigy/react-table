import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
export interface PTableFooterCellProps<T = PTableItem> {
    column: PTableColumn;
    items?: T[];
    defaultAlign?: PTableProps['defaultAlign'];
}
