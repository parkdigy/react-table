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
  const [checkDisabled, setCheckDisabled] = useState(false);

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
      setCheckDisabled(checkDisabled: boolean) {
        if (column.type === 'check') {
          setCheckDisabled(checkDisabled);
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
          disabled={checkDisabled}
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
  }, [checkDisabled, checked, column, onCheckChange]);

  // Render ------------------------------------------------------------------------------------------------------------

  return (
    <TableCommonCell type='head' className='TableHeadCell' column={column} defaultAlign={defaultAlign}>
      {data}
    </TableCommonCell>
  );
};

export default TableHeadCell;
