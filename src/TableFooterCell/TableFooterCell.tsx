import React, { ReactNode, useCallback } from 'react';
import { TableFooterCellProps } from './TableFooterCell.types';
import TableCommonCell from '../TableCommonCell';
import { useAutoUpdateState } from '@pdg/react-hook';

const TableFooterCell: React.FC<TableFooterCellProps> = ({ column, defaultAlign }) => {
  const [data] = useAutoUpdateState<ReactNode>(
    useCallback(() => {
      if (column.footer?.onRender) {
        return column.footer?.onRender();
      } else {
        return column.footer?.value;
      }
    }, [column])
  );

  return (
    <TableCommonCell
      type='head'
      column={column}
      defaultAlign={defaultAlign}
      style={{ borderTop: '1px solid rgba(224, 224, 224, 1)' }}
    >
      {data}
    </TableCommonCell>
  );
};

export default TableFooterCell;
