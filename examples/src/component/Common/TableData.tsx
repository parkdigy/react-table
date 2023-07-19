import React from 'react';
import { Box, MenuItem, MenuList, styled } from '@mui/material';
import { TableColumn, TableItem, TableButton } from '@pdg/react-table';
import data from './data.json';
import { TableMenuButton } from '../../../../src';

const StyledHeaderTag = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const StyledTitle = styled(Box)`
  font-weight: 700;
`;

const StyledTag = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.7rem',
}));

const columns: TableColumn[] = [
  { label: 'ID', name: 'id', width: 100, footer: { value: '합계' } },
  {
    label: '카테고리',
    width: 150,
    align: 'left',
    onRender({ category_name, category_color }) {
      return <span style={{ color: category_color }}>{category_name}</span>;
    },
  },
  {
    type: 'img',
    name: 'title_img_url',
    width: 80,
  },
  {
    label: (
      <>
        <Box>제목</Box>
        <StyledHeaderTag>태그</StyledHeaderTag>
      </>
    ),
    align: 'left',
    ellipsis: true,
    minWidth: 200,
    onRender(item: TableItem) {
      return (
        <>
          <StyledTitle>{item.title}</StyledTitle>
          {item.tags && <StyledTag>{item.tags.join(', ')}</StyledTag>}
        </>
      );
    },
  },
  {
    label: '조회수',
    type: 'number',
    name: 'view_count',
    width: 100,
    footer: {
      onRender() {
        return numberWithThousandSeparator(12123);
      },
    },
  },
  {
    label: '상태',
    name: 'status_name',
    width: 80,
  },
  {
    label: '등록자',
    name: 'create_admin_user_name',
    width: 80,
    tooltipProps: {
      placement: 'top',
    },
    onGetTooltip({ create_admin_user_email }) {
      return create_admin_user_email;
    },
  },
  {
    label: '등록일자',
    name: 'create_date',
    type: 'date',
    align: 'center',
    width: 160,
  },
  {
    type: 'button',
    label: '수정',
    align: 'center',
    width: 80,
    onRender() {
      return <TableButton icon='Edit' />;
    },
  },
  {
    type: 'buttons',
    align: 'center',
    width: 100,
    onRender() {
      return (
        <>
          <TableButton icon='Link' />
          <TableButton icon='Delete' color='error' />
        </>
      );
    },
  },
  {
    type: 'button',
    align: 'right',
    width: 50,
    onRender() {
      return (
        <TableMenuButton
          icon='MoreVert'
          variant='text'
          placement='bottom-end'
          menuList={
            <MenuList>
              <MenuItem onClick={() => ll('edit')}>수정하기</MenuItem>
              <MenuItem onClick={() => ll('remove')}>삭제하기</MenuItem>
            </MenuList>
          }
        />
      );
    },
  },
];

const TableData = {
  columns,
  items: data.items,
  paging: data.paging,
};

export default TableData;
