import React from 'react';
import { Table as _Table, TableItem } from '@pdg/react-table';
import { TableData } from '#ccomp';

const Table: React.FC = () => {
  const handleClick = (item: TableItem) => {
    ll(item);
  };

  const handlePageChange = (page: number) => {
    ll('handlePageChange', page);
  };

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <_Table
      defaultAlign='center'
      defaultEllipsis
      columns={TableData.columns}
      items={TableData.items}
      paging={TableData.paging}
      showEvenColor
      footer
      onClick={handleClick}
      onPageChange={handlePageChange}
    />
  );
};

export default Table;
