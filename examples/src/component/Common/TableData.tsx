import React from 'react';
import { Box, MenuItem, MenuList, styled } from '@mui/material';
import data from './data.json';
import { PTableProps, PTableItem, PTableButton, PTableMenuButton } from '../../../../src';
import { formatNumber } from '@pdg/formatting';

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

const columns: PTableProps<TTableDataItem>['columns'] = [
  {
    id: 'check',
    type: 'check',
    width: 50,
    onCheckDisabled(item: TTableDataItem): boolean {
      return item.id === 12;
    },
    onInitChecked(item: TTableDataItem): boolean {
      return item.id % 2 === 0;
    },
    onCheckChange(item: TTableDataItem, checked: boolean) {
      ll('onCheckChange', item.id, checked);
    },
    onHide(item: TTableDataItem): boolean {
      return item.id === 12;
    },
  },
  { id: 'id', label: 'ID', name: 'id', width: 100, footer: { value: '합계' } },
  {
    id: 'category',
    label: '카테고리',
    width: 100,
    align: 'left',
    onRender({ category_name, category_color }) {
      return <span style={{ color: category_color }}>{category_name}</span>;
    },
  },
  {
    id: 'img',
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
    onRender(item: PTableItem) {
      return (
        <>
          <StyledTitle>{item.title}</StyledTitle>
          {item.tags && <StyledTag>{item.tags.join(', ')}</StyledTag>}
        </>
      );
    },
    onGetTooltip(item) {
      return item.title;
    },
  },
  {
    label: '조회수',
    type: 'number',
    numberSuffix: '원',
    name: 'view_count',
    width: 100,
    footer: {
      onRender(items) {
        if (items) {
          return formatNumber(items.reduce((acc, item) => acc + item.view_count, 0));
        }
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
    type: 'datetime',
    align: 'center',
    width: 100,
    dateTwoLine: true,
  },
  {
    type: 'button',
    label: '수정',
    align: 'center',
    width: 80,
    onRender() {
      return <PTableButton>수정</PTableButton>;
    },
  },
  {
    type: 'buttons',
    align: 'center',
    width: 100,
    onRender() {
      return (
        <>
          <PTableButton startIcon='Link' />
          <PTableButton startIcon='Delete' color='error' />
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
        <PTableMenuButton
          placement='left'
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

const TableData: Required<Pick<PTableProps<TTableDataItem>, 'columns' | 'items' | 'paging'>> = {
  columns,
  items: data.items,
  paging: data.paging,
};

export default TableData;
