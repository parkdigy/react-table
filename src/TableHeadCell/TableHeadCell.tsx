import React, { useEffect, useMemo, useState } from 'react';
import { TableHeadCellProps } from './TableHeadCell.types';
import TableCommonCell from '../TableCommonCell';
import { Checkbox } from '@mui/material';
import useTableState from '../TableContext/useTableState';

const TableHeadCell: React.FC<TableHeadCellProps> = ({ column, defaultAlign, onCheckChange }) => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const { setHeadColumnChecked, setHeadColumnCommands } = useTableState();

  // State -------------------------------------------------------------------------------------------------------------

  const [checked, setChecked] = useState(false);

  // Effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    if (column.type === 'check') {
      setHeadColumnChecked(column, checked);
    }
  }, [column, checked, setHeadColumnChecked]);

  useEffect(() => {
    setHeadColumnCommands(column, {
      setChecked(checked: boolean) {
        if (column.type === 'check') {
          setChecked(checked);
        }
      },
    });
  }, [setHeadColumnCommands, column]);

  // Memo --------------------------------------------------------------------------------------------------------------

  const data = useMemo(() => {
    if (column.type === 'check') {
      return (
        <Checkbox
          checked={checked}
          onChange={(e, newChecked) => {
            setChecked(newChecked);
            onCheckChange && onCheckChange(column, newChecked);
          }}
        />
      );
    } else {
      if (column.head?.onRender) {
        return column.head?.onRender();
      } else {
        return column.label;
      }
    }
  }, [checked, column, onCheckChange]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <TableCommonCell type='head' className='TableHeadCell' column={column} defaultAlign={defaultAlign}>
      {data}
    </TableCommonCell>
  );
};

export default TableHeadCell;
