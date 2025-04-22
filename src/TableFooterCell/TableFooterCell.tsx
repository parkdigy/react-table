import React, { useMemo } from 'react';
import { TableFooterCellProps } from './TableFooterCell.types';
import TableCommonCell from '../TableCommonCell';

const TableFooterCell: React.FC<TableFooterCellProps> = ({ column, items, defaultAlign }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const data = useMemo(() => {
    if (column.footer?.onRender) {
      return column.footer?.onRender(items);
    } else {
      return column.footer?.value;
    }
  }, [column.footer, items]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <TableCommonCell type='head' className='TableFooterCell' column={column} defaultAlign={defaultAlign}>
      {data}
    </TableCommonCell>
  );
};

export default TableFooterCell;
