import { StackProps } from '@mui/material';
import { CommonSxProps } from '../@types';
export interface TablePaging {
    current_page: number;
    per_page: number;
    last_page: number;
    total: number;
}
export interface TablePaginationProps extends Pick<CommonSxProps, 'className' | 'style' | 'sx'> {
    paging: TablePaging;
    align?: StackProps['alignItems'];
    onChange?(page: number): void;
}
