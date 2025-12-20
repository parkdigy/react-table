import React from 'react';
import classNames from 'classnames';
import { PTablePaginationProps as Props } from './PTablePagination.types';
import { Pagination, Stack } from '@mui/material';

const PTablePagination = ({ className, style, sx, paging, align, onChange }: Props) => {
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
