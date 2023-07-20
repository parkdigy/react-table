import React, { useCallback, useRef, useState } from 'react';
import { Table as _Table, TableCommands } from '../../../../src';
import { TableData } from '#ccomp';
import { Button, Grid, Stack } from '@mui/material';
import { TTableDataItem } from '../Common/TableData';

const Table: React.FC = () => {
  const tableRef = useRef<TableCommands<TTableDataItem>>(null);

  const [sorting, setSorting] = useState(false);

  const handleClick = useCallback((item: TTableDataItem) => {
    ll(item);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    ll('handlePageChange', page);
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

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <Stack style={{ height: '100%' }} spacing={1}>
      <div>
        <Button onClick={handleGetCheckedItems}>체크된 아이템 가져오기</Button>
      </div>
      {sorting && (
        <Grid container spacing={1}>
          <Grid item>
            <Button>변경된 순서 저장</Button>
          </Grid>
          <Grid item>
            <Button color='secondary' onClick={() => tableRef.current?.resetSort()}>
              순서 초기화
            </Button>
          </Grid>
        </Grid>
      )}
      <_Table<TTableDataItem>
        ref={tableRef}
        defaultAlign='center'
        defaultEllipsis
        stickyHeader
        fullHeight
        columns={TableData.columns}
        items={TableData.items}
        paging={TableData.paging}
        showEvenColor
        footer
        sortable
        onClick={handleClick}
        onPageChange={handlePageChange}
        onSortChange={handleSortChange}
        onCheckChange={handleCheckChange}
      />
    </Stack>
  );
};

export default Table;
