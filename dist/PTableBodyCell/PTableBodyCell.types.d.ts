import { PTableColumn, PTableItem, PTableProps } from '../PTable/PTable.types';
import { PTableCommonSxProps } from '../@types';
export interface PTableBodyCellCommands {
    setChecked: (checked: boolean) => void;
    setCheckDisabled: (disabled: boolean) => void;
}
export interface PTableBodyCellProps {
    className?: PTableCommonSxProps['className'];
    style?: PTableCommonSxProps['style'];
    sx?: PTableCommonSxProps['sx'];
    index: number;
    item: PTableItem;
    column: PTableColumn;
    defaultAlign?: PTableProps['defaultAlign'];
    defaultEllipsis?: boolean;
    onClick: PTableProps['onClick'];
    onCheckChange: (item: PTableItem, column: PTableColumn, checked: boolean) => void;
}
