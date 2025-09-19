import { StackProps } from '@mui/material';
import { PTableCommonSxProps } from '../@types';

export interface PTablePaging {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
}

export interface PTablePaginationProps extends Pick<PTableCommonSxProps, 'className' | 'style' | 'sx'> {
  paging: PTablePaging;
  align?: StackProps['alignItems'];
  onChange?: (page: number) => void;
}
