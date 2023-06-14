import React, { useMemo } from 'react';
import { TableFooterCellProps } from './TableFooterCell.types';
import TableCommonCell from '../TableCommonCell';

const TableFooterCell: React.FC<TableFooterCellProps> = ({ column, defaultAlign }) => {
  const data = useMemo(() => {
    if (column.footer?.onRender) {
      return column.footer?.onRender();
    } else {
      return column.footer?.value;
    }
  }, [column]);

  return (
    <TableCommonCell
      type='head'
      className='TableFooterCell'
      column={column}
      defaultAlign={defaultAlign}
      style={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}
    >
      {data}
    </TableCommonCell>
  );
};

export default TableFooterCell;
