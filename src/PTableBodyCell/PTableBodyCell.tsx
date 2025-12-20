import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { Box, Checkbox, styled, Tooltip } from '@mui/material';
import { PTableBodyCellProps as Props } from './PTableBodyCell.types';
import { getTableColumnAlign } from '../@util.private';
import PTableCommonCell from '../PTableCommonCell';
import { PTableItem } from '../PTable/PTable.types';
import dayjs from 'dayjs';
import useTableState from '../PTableContext/useTableState';
import classNames from 'classnames';
import { formatBusinessNo, formatNumber, formatPersonalNo, formatTelNo } from '@pdg/formatting';
import { useChanged } from '@pdg/react-hook';

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

function PTableBodyCell<T extends PTableItem = PTableItem>({
  ref,
  className,
  style,
  sx,
  item,
  index,
  column,
  defaultAlign,
  defaultEllipsis,
  onClick,
  onCheckChange,
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { menuOpen, setItemColumnChecked, setItemColumnCheckDisabled, setItemColumnCommands } = useTableState<T>();

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [checked, setChecked] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  {
    const isColumnChanged = useChanged(column, true);
    const isItemChanged = useChanged(item, true);
    const isSetItemColumnCommandsChanged = useChanged(setItemColumnCommands, true);

    if (isColumnChanged || isItemChanged || isSetItemColumnCommandsChanged) {
      if (column.type === 'check') {
        setChecked(column.onInitChecked ? column.onInitChecked(item) : false);
        setCheckDisabled(column.onCheckDisabled ? column.onCheckDisabled(item) : false);
      }

      setItemColumnCommands(item, column, {
        setChecked(checked: boolean) {
          if (column.type === 'check') {
            setChecked(checked);
          }
        },
        setCheckDisabled(disabled: boolean) {
          if (column.type === 'check') {
            setCheckDisabled(disabled);
          }
        },
      });
    }
  }

  if (useChanged(checked, true)) {
    if (column.type === 'check') {
      setItemColumnChecked(item, column, checked);
    }
  }

  if (useChanged(checkDisabled, true)) {
    if (column.type === 'check') {
      setItemColumnCheckDisabled(item, column, checkDisabled);
      column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
    }
  }

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const isHidden = useMemo(() => (column.onHide ? column.onHide(item, index) : false), [column, index, item]);

  const buttonsBoxJustifyContent = useMemo(() => {
    switch (getTableColumnAlign(column, defaultAlign)) {
      case 'center':
        return 'center';
      case 'right':
        return 'end';
      default:
        return 'start';
    }
  }, [column, defaultAlign]);

  const data = useMemo(() => {
    let newData;
    if (column.type !== 'check') {
      if (column.onRender) {
        newData = column.onRender(item, index);
      } else if (column.name) {
        newData = item[column.name];
      } else {
        newData = undefined;
      }
    }

    switch (column.type) {
      case 'number':
        if (typeof newData === 'string' || typeof newData === 'number') {
          newData = formatNumber(newData);
        }
        if (column.numberPrefix) {
          newData = (
            <>
              <span style={{ opacity: 0.5, marginRight: 2 }}>{column.numberPrefix}</span>
              {newData}
            </>
          );
        }
        if (column.numberSuffix) {
          newData = (
            <>
              {newData}
              <span style={{ opacity: 0.5, marginLeft: 2 }}>{column.numberSuffix}</span>
            </>
          );
        }
        break;
      case 'tel':
        if (typeof newData === 'string') {
          newData = formatTelNo(newData);
        }
        break;
      case 'business_no':
        if (typeof newData === 'string') {
          newData = formatBusinessNo(newData);
        }
        break;
      case 'personal_no':
        if (typeof newData === 'string') {
          newData = formatPersonalNo(newData);
        }
        break;
      case 'check':
        newData = (
          <Box className='PTableBoxyCell-check-box' onClick={menuOpen ? undefined : (e) => e.stopPropagation()}>
            <Checkbox
              checked={checked}
              disabled={checkDisabled}
              onChange={(e, newChecked) => {
                setChecked(newChecked);
                column.onCheckChange?.(item, newChecked);
                onCheckChange(item, column, newChecked);
              }}
            />
          </Box>
        );
        break;
      case 'button':
        newData = (
          <Box className='PTableBoxyCell-button-box' onClick={menuOpen ? undefined : (e) => e.stopPropagation()}>
            {newData}
          </Box>
        );
        break;
      case 'buttons':
        newData = (
          <StyledButtonsBox
            className='PTableBodyCell-buttons-box'
            justifyContent={buttonsBoxJustifyContent}
            onClick={menuOpen ? undefined : (e) => e.stopPropagation()}
          >
            {newData}
          </StyledButtonsBox>
        );
        break;
      case 'img':
        {
          const img = <img src={newData as any} style={{ maxWidth: '100%', verticalAlign: 'middle' }} alt='' />;
          const placement = column.tooltipProps?.placement ? column.tooltipProps?.placement : 'left';

          newData = (
            <a
              href={newData as any}
              target='_blank'
              rel='noreferrer'
              onClick={
                menuOpen
                  ? undefined
                  : (e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.stopPropagation();
                    }
              }
            >
              <Tooltip
                className='PTableBodyCell-tooltip'
                title={<div style={{ paddingTop: 3, paddingBottom: 3 }}>{img}</div>}
                {...column.tooltipProps}
                placement={placement}
              >
                {img}
              </Tooltip>
            </a>
          );
        }
        break;
      case 'date':
        if (newData) {
          newData = dayjs(newData as any, column.dateFormat).format('YYYY-MM-DD');
        }
        break;
      case 'datetime':
        if (newData) {
          const dt = dayjs(newData as any, column.dateFormat);
          newData = (
            <>
              <span>{dt.format('YYYY-MM-DD')}</span>
              {column.dateTwoLine ? <br /> : ' '}
              <span style={{ opacity: 0.5 }}>{dt.format('HH:mm:ss')}</span>
            </>
          );
        }
        break;
      case 'date-hour':
        if (newData) {
          const dt = dayjs(newData as any, column.dateFormat);
          newData = (
            <>
              <span>{dt.format('YYYY-MM-DD')}</span>
              {column.dateTwoLine ? <br /> : ' '}
              <span style={{ opacity: 0.5 }}>{dt.format('HH시')}</span>
            </>
          );
        }
        break;
      case 'date-minute':
        if (newData) {
          const dt = dayjs(newData as any, column.dateFormat);
          newData = (
            <>
              <span>{dt.format('YYYY-MM-DD')}</span>
              {column.dateTwoLine ? <br /> : ' '}
              <span style={{ opacity: 0.5 }}>{dt.format('HH시 MM분')}</span>
            </>
          );
        }
        break;
    }

    if (column.type !== 'img') {
      let tooltip: ReactNode;
      if (column.onGetTooltip) {
        tooltip = column.onGetTooltip(item, index);
      }
      if (tooltip) {
        newData = (
          <Tooltip className='PTableBodyCell-tooltip' title={tooltip} {...column.tooltipProps}>
            {React.isValidElement(newData) ? (
              newData.type === React.Fragment ? (
                <span>{newData}</span>
              ) : (
                newData
              )
            ) : (
              <span>{newData}</span>
            )}
          </Tooltip>
        );
      }
    }
    return newData;
  }, [column, item, index, menuOpen, checked, checkDisabled, buttonsBoxJustifyContent, onCheckChange]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback(
    (item: T, index: number) => {
      if (column.onClick) {
        column.onClick(item, index);
      } else {
        if (onClick) onClick(item, index);
      }
    },
    [column, onClick]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <PTableCommonCell
      ref={ref}
      type='body'
      className={classNames('PTableBodyCell', className)}
      style={style}
      sx={sx}
      column={column}
      defaultAlign={defaultAlign}
      defaultEllipsis={defaultEllipsis}
      item={item}
      index={index}
      onClick={column.onClick || onClick ? handleClick : undefined}
    >
      {!isHidden && data}
    </PTableCommonCell>
  );
}

export default PTableBodyCell;
