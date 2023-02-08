import React, { useRef, useState } from 'react';
import { Table as _Table, TableItem, TableCommands } from '@pdg/react-table';
import { TableData } from '#ccomp';
import { Button, Grid } from '@mui/material';

const Table: React.FC = () => {
  const tableRef = useRef<TableCommands>(null);

  const [sorting, setSorting] = useState(false);

  const handleClick = (item: TableItem) => {
    ll(item);
  };

  const handlePageChange = (page: number) => {
    ll('handlePageChange', page);
  };

  const handleSortChange = (items: TableItem[]) => {
    setSorting(true);
    ll(items);
  };

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      {sorting && (
        <Grid container style={{ marginBottom: 10 }} spacing={1}>
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
      <_Table
        ref={tableRef}
        defaultAlign='center'
        defaultEllipsis
        columns={TableData.columns}
        items={TableData.items}
        paging={TableData.paging}
        showEvenColor
        footer
        sortable
        onClick={handleClick}
        onPageChange={handlePageChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default Table;
