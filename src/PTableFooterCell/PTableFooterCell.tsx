import React, { useMemo } from 'react';
import { PTableFooterCellProps as Props } from './PTableFooterCell.types';
import PTableCommonCell from '../PTableCommonCell';
import { PTableItem } from '../PTable';

function PTableFooterCell<T extends PTableItem = PTableItem>({ column, items, defaultAlign }: Props<T>) {
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
}

export default PTableFooterCell;
