import React from 'react';
import { Box, MenuItem, MenuList, styled } from '@mui/material';
import data from './data.json';
import { TableProps, TableItem, TableButton, TableMenuButton } from '../../../../src';

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

export interface TTableDataItem {
  id: number;
  title: string;
  title_img_url: string;
  tags: string[];
  status: string;
  view_count: number;
  create_date: string;
  category_name: string;
  category_color: string;
  create_admin_user_name: string;
  create_admin_user_email: string;
  status_name: string;
}

const columns: TableProps<TTableDataItem>['columns'] = [
  {
    id: 'check',
    type: 'check',
    width: 50,
    onCheckDisabled(item: TTableDataItem): boolean {
      return item.id === 12;
    },
    onHide(item: TTableDataItem): boolean {
      return item.id === 12;
    },
  },
  { id: 'id', label: 'ID', name: 'board_id', width: 100, footer: { value: '합계' } },
  {
    id: 'category',
    label: '카테고리',
    width: 150,
    align: 'left',
    onRender({ category_name, category_color }) {
      return <span style={{ color: category_color }}>{category_name}</span>;
    },
  },
  {
    id: 'title_img_url',
    type: 'img',
    name: 'title_img_url',
    width: 80,
  },
  {
    id: 'title',
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
    id: 'view_count',
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
    id: 'status',
    label: '상태',
    name: 'status_name',
    width: 80,
  },
  {
    id: 'create_admin_user',
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
    id: 'create_date',
    label: '등록일자',
    name: 'create_date',
    type: 'date',
    align: 'center',
    width: 160,
  },
  {
    id: 'button',
    type: 'button',
    label: '수정',
    align: 'center',
    width: 80,
    onRender() {
      return <TableButton icon='Edit' />;
    },
  },
  {
    id: 'buttons',
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
    id: 'menu',
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

const TableData: Required<Pick<TableProps<TTableDataItem>, 'columns' | 'items' | 'paging'>> = {
  columns,
  items: data.items,
  paging: data.paging,
};

export default TableData;
