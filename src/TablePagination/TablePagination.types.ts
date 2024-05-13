import { StackProps } from '@mui/material';
import { TableCommonSxProps } from '../@types';

export interface TablePaging {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
}

export interface TablePaginationProps extends Pick<TableCommonSxProps, 'className' | 'style' | 'sx'> {
  paging: TablePaging;
  align?: StackProps['alignItems'];
  onChange?(page: number): void;
}
