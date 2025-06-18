import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Checkbox, styled, Tooltip } from '@mui/material';
import { PTableBodyCellProps as Props } from './PTableBodyCell.types';
import { getTableColumnAlign } from '../@util.private';
import PTableCommonCell from '../PTableCommonCell';
import { PTableItem } from '../PTable/PTable.types';
import dayjs from 'dayjs';
import useTableState from '../PTableContext/useTableState';
import classNames from 'classnames';
import { formatBusinessNo, formatNumber, formatPersonalNo, formatTelNo } from '@pdg/formatting';

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const PTableBodyCell = React.forwardRef<HTMLTableCellElement, Props>(
  ({ className, style, sx, item, index, column, defaultAlign, defaultEllipsis, onClick, onCheckChange }, ref) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/

    const { menuOpen, setItemColumnChecked, setItemColumnCheckDisabled, setItemColumnCommands } = useTableState();

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
    }, [column, item, setItemColumnCommands]);

    useEffect(() => {
      if (column.type === 'check') {
        setItemColumnChecked(item, column, checked);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    useEffect(() => {
      if (column.type === 'check') {
        setItemColumnCheckDisabled(item, column, checkDisabled);
        column.onCheckDisabledChange && column.onCheckDisabledChange(item, checkDisabled);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkDisabled]);

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
      let data;
      if (column.type !== 'check') {
        if (column.onRender) {
          data = column.onRender(item, index);
        } else if (column.name) {
          data = item[column.name];
        } else {
          data = undefined;
        }
      }

      switch (column.type) {
        case 'number':
          if (typeof data === 'string' || typeof data === 'number') {
            data = formatNumber(data);
          }
          if (column.numberPrefix) {
            data = (
              <>
                <span style={{ opacity: 0.5, marginRight: 2 }}>{column.numberPrefix}</span>
                {data}
              </>
            );
          }
          if (column.numberSuffix) {
            data = (
              <>
                {data}
                <span style={{ opacity: 0.5, marginLeft: 2 }}>{column.numberSuffix}</span>
              </>
            );
          }
          break;
        case 'tel':
          if (typeof data === 'string') {
            data = formatTelNo(data);
          }
          break;
        case 'business_no':
          if (typeof data === 'string') {
            data = formatBusinessNo(data);
          }
          break;
        case 'personal_no':
          if (typeof data === 'string') {
            data = formatPersonalNo(data);
          }
          break;
        case 'check':
          data = (
            <Box className='PTableBoxyCell-check-box' onClick={menuOpen ? undefined : (e) => e.stopPropagation()}>
              <Checkbox
                checked={checked}
                disabled={checkDisabled}
                onChange={(e, newChecked) => {
                  setChecked(newChecked);
                  column.onCheckChange && column.onCheckChange(item, newChecked);
                  onCheckChange && onCheckChange(item, column, newChecked);
                }}
              />
            </Box>
          );
          break;
        case 'button':
          data = (
            <Box className='PTableBoxyCell-button-box' onClick={menuOpen ? undefined : (e) => e.stopPropagation()}>
              {data}
            </Box>
          );
          break;
        case 'buttons':
          data = (
            <StyledButtonsBox
              className='PTableBodyCell-buttons-box'
              justifyContent={buttonsBoxJustifyContent}
              onClick={menuOpen ? undefined : (e) => e.stopPropagation()}
            >
              {data}
            </StyledButtonsBox>
          );
          break;
        case 'img':
          {
            const img = <img src={data} style={{ maxWidth: '100%', verticalAlign: 'middle' }} alt='' />;
            const placement = column.tooltipProps?.placement ? column.tooltipProps?.placement : 'left';

            data = (
              <a
                href={data}
                target='_blank'
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
          if (data) {
            data = dayjs(data, column.dateFormat).format('YYYY-MM-DD');
          }
          break;
        case 'datetime':
          if (data) {
            const dt = dayjs(data, column.dateFormat);
            data = (
              <>
                <span>{dt.format('YYYY-MM-DD')}</span>
                {column.dateTwoLine ? <br /> : ' '}
                <span style={{ opacity: 0.5 }}>{dt.format('HH:mm:ss')}</span>
              </>
            );
          }
          break;
        case 'date-hour':
          if (data) {
            const dt = dayjs(data, column.dateFormat);
            data = (
              <>
                <span>{dt.format('YYYY-MM-DD')}</span>
                {column.dateTwoLine ? <br /> : ' '}
                <span style={{ opacity: 0.5 }}>{dt.format('HH시')}</span>
              </>
            );
          }
          break;
        case 'date-minute':
          if (data) {
            const dt = dayjs(data, column.dateFormat);
            data = (
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
          data = (
            <Tooltip className='PTableBodyCell-tooltip' title={tooltip} {...column.tooltipProps}>
              {React.isValidElement(data) ? (
                data.type === React.Fragment ? (
                  <span>{data}</span>
                ) : (
                  data
                )
              ) : (
                <span>{data}</span>
              )}
            </Tooltip>
          );
        }
      }
      return data;
    }, [column, item, index, menuOpen, checked, checkDisabled, buttonsBoxJustifyContent, onCheckChange]);

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

    const handleClick = useCallback(
      (item: PTableItem, index: number) => {
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
);

export default PTableBodyCell;
