import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
export interface PTableFooterCellProps<T extends PTableItem = PTableItem> {
    column: PTableColumn<T>;
    items?: T[];
    defaultAlign?: PTableProps<T>['defaultAlign'];
}
