import React, { useMemo } from 'react';
import { TableFooterCellProps } from './TableFooterCell.types';
import TableCommonCell from '../TableCommonCell';

const TableFooterCell: React.FC<TableFooterCellProps> = ({ column, defaultAlign }) => {
  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const data = useMemo(() => {
    if (column.footer?.onRender) {
      return column.footer?.onRender();
    } else {
      return column.footer?.value;
    }
  }, [column]);

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
