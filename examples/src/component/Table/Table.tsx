import React, { useState } from 'react';
import { Table as _Table, TableItem } from '@pdg/react-table';
import { TableData } from '#ccomp';
import { Button } from '@mui/material';

const Table: React.FC = () => {
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
      {sorting && <Button style={{ marginBottom: 10 }}>변경된 순서 저장</Button>}
      <_Table
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
