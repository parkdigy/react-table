import React, { useEffect, useMemo, useState } from 'react';
import { PTableHeadCellProps } from './PTableHeadCell.types';
import PTableCommonCell from '../PTableCommonCell';
import { Checkbox } from '@mui/material';
import useTableState from '../PTableContext/useTableState';

const PTableHeadCell: React.FC<PTableHeadCellProps> = ({ column, items, defaultAlign, top, onCheckChange }) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { setHeadColumnChecked, setHeadColumnCommands } = useTableState();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [checked, setChecked] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

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

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const data = useMemo(() => {
    if (column.type === 'check') {
      if (column.hideAllCheck) {
        if (column.head?.onRender) {
          return column.head?.onRender(items);
        } else {
          if (typeof column.label === 'string') {
            return <div dangerouslySetInnerHTML={{ __html: column.label }} />;
          } else {
            return column.label;
          }
        }
      } else {
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
      }
    } else {
      if (column.head?.onRender) {
        return column.head?.onRender(items);
      } else {
        if (typeof column.label === 'string') {
          return <div dangerouslySetInnerHTML={{ __html: column.label }} />;
        } else {
          return column.label;
        }
      }
    }
  }, [checkDisabled, checked, column, items, onCheckChange]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PTableCommonCell
      type='head'
      className='PTableHeadCell'
      style={top !== undefined ? { top } : undefined}
      column={column}
      defaultAlign={defaultAlign}
    >
      {data}
    </PTableCommonCell>
  );
};

export default PTableHeadCell;
