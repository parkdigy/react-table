import React from 'react';
import classNames from 'classnames';
import { TablePaginationProps } from './TablePagination.types';
import { Pagination, Stack } from '@mui/material';

const TablePagination: React.FC<TablePaginationProps> = ({ className, style, sx, paging, align, onChange }) => {
  return (
    <Stack alignItems={align}>
      <Pagination
        count={paging.last_page}
        page={paging.current_page}
        color='primary'
        className={classNames('TablePagination', className)}
        style={style}
        sx={sx}
        onChange={(e, page) => {
          if (onChange) onChange(page);
        }}
      />
    </Stack>
  );
};

export default TablePagination;
