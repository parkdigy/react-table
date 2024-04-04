import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Table as _Table, TableCommands, TableProps } from '../../../../src';
import { TableData } from '@ccomp';
import { Alert, Button, Grid, Stack } from '@mui/material';
import { TTableDataItem } from '../Common/TableData';
import { FormCheckbox, Search, SearchGroup } from '@pdg/react-form';

const Table: React.FC = () => {
  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const tableRef = useRef<TableCommands<TTableDataItem>>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [fullHeight, setFullHeight] = useState(true);
  const [stickyHeader, setStickyHeader] = useState(false);

  const [sorting, setSorting] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<TTableDataItem[]>();
  const [paging, setPaging] = useState<TableProps['paging']>();

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    const total = TableData.items.length;
    const perPage = 10;
    const lastPage = Math.ceil(total / perPage);
    const startIndex = (page - 1) * perPage;
    const lastIndex = Math.min(startIndex + (perPage - 1), total - 1);

    const newItems: TTableDataItem[] = [];
    for (let i = startIndex; i <= lastIndex; i += 1) {
      newItems.push(TableData.items[i]);
    }

    setItems(newItems);
    setPaging({
      current_page: page,
      per_page: perPage,
      last_page: lastPage,
      total,
    });
  }, [page]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback((item: TTableDataItem) => {
    ll(item);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  const handleSortChange = useCallback((items: TTableDataItem[]) => {
    setSorting(true);
    ll('handleSortChange', items);
  }, []);

  const handleCheckChange = useCallback((columnId: string, items: TTableDataItem[]) => {
    ll('handleCheckChange', columnId, items);
  }, []);

  const handleGetCheckedItems = useCallback(() => {
    ll(tableRef.current?.getCheckedItems('check'));
  }, []);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Stack style={{ height: '100%' }} spacing={1}>
      <div>
        <Button onClick={handleGetCheckedItems}>체크된 아이템 가져오기</Button>
      </div>
      <Search>
        <SearchGroup>
          <FormCheckbox
            name='fullHeight'
            text='fullHeight (전체 높이)'
            checked={fullHeight}
            onChange={(checked) => {
              setFullHeight(checked);
            }}
          />
          <FormCheckbox
            name='stickyHeader'
            text='stickyHeader (타이틀 고정)'
            checked={stickyHeader}
            onChange={(checked) => {
              setStickyHeader(checked);
            }}
          />
        </SearchGroup>
      </Search>
      {sorting ? (
        <div style={{ border: '1px solid #efefef', padding: 10 }}>
          <Grid container spacing={1}>
            <Grid item>
              <Button variant='contained'>변경된 순서 저장</Button>
            </Grid>
            <Grid item>
              <Button
                color='secondary'
                onClick={() => {
                  tableRef.current?.resetSort();
                  setSorting(false);
                }}
              >
                순서 초기화
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Alert severity='info'>드래그하여 순서를 변경할 수 있습니다.</Alert>
      )}
      {items && paging && (
        <_Table<TTableDataItem>
          ref={tableRef}
          defaultAlign='center'
          stickyHeader={stickyHeader}
          fullHeight={fullHeight}
          caption='게시판 목록'
          topHeadRows={[
            { colSpan: 2 },
            { colSpan: 3, label: '카테고리/제목', align: 'center' },
            { colSpan: 2, label: '조회수/상태', align: 'center' },
          ]}
          columns={TableData.columns}
          items={items}
          paging={paging}
          showEvenColor
          footer
          sortable
          onClick={handleClick}
          onPageChange={handlePageChange}
          onSortChange={handleSortChange}
          onCheckChange={handleCheckChange}
        />
      )}
    </Stack>
  );
};

export default Table;
