import React, { useMemo } from 'react';
import { PTableFooterCellProps } from './PTableFooterCell.types';
import PTableCommonCell from '../PTableCommonCell';

const PTableFooterCell: React.FC<PTableFooterCellProps> = ({ column, items, defaultAlign }) => {
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
    <PTableCommonCell type='head' className='PTableFooterCell' column={column} defaultAlign={defaultAlign}>
      {data}
    </PTableCommonCell>
  );
};

export default PTableFooterCell;
