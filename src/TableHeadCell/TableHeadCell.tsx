import React, { useMemo } from 'react';
import { TableHeadCellProps } from './TableHeadCell.types';
import TableCommonCell from '../TableCommonCell';

const TableHeadCell: React.FC<TableHeadCellProps> = ({ column, defaultAlign }) => {
  const data = useMemo(() => {
    if (column.head?.onRender) {
      return column.head?.onRender();
    } else {
      return column.label;
    }
  }, [column]);

  return (
    <TableCommonCell type='head' className='TableHeadCell' column={column} defaultAlign={defaultAlign}>
      {data}
    </TableCommonCell>
  );
};

export default TableHeadCell;
