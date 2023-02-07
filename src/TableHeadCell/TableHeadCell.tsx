import React, { ReactNode, useCallback } from 'react';
import { TableHeadCellProps } from './TableHeadCell.types';
import TableCommonCell from '../TableCommonCell';
import { useAutoUpdateState } from '@pdg/react-hook';

const TableHeadCell: React.FC<TableHeadCellProps> = ({ column, defaultAlign }) => {
  const [data] = useAutoUpdateState<ReactNode>(
    useCallback(() => {
      if (column.head?.onRender) {
        return column.head?.onRender();
      } else {
        return column.label;
      }
    }, [column])
  );

  return (
    <TableCommonCell type='head' className='TableHeadCell' column={column} defaultAlign={defaultAlign}>
      {data}
    </TableCommonCell>
  );
};

export default TableHeadCell;
