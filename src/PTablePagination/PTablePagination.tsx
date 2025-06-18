import React from 'react';
import classNames from 'classnames';
import { PTablePaginationProps } from './PTablePagination.types';
import { Pagination, Stack } from '@mui/material';

const PTablePagination: React.FC<PTablePaginationProps> = ({ className, style, sx, paging, align, onChange }) => {
  return (
    <Stack alignItems={align}>
      <Pagination
        count={paging.last_page}
        page={paging.current_page}
        color='primary'
        className={classNames('PTablePagination', className)}
        style={style}
        sx={sx}
        onChange={(e, page) => {
          if (onChange) onChange(page);
        }}
      />
    </Stack>
  );
};

export default PTablePagination;
