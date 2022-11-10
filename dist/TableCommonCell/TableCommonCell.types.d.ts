import { TableColumn, TableItem, TableProps } from '../Table/Table.types';
import { CommonSxProps } from '../@types';
export interface TableCommonCellProps extends CommonSxProps {
    type: 'head' | 'body' | 'footer';
    column: TableColumn;
    defaultAlign?: TableProps['defaultAlign'];
    defaultEllipsis?: boolean;
    index?: number;
    item?: TableItem;
    onClick?: TableProps['onClick'];
}
