import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Checkbox, styled, Tooltip } from '@mui/material';
import { TableBodyCellProps as Props } from './TableBodyCell.types';
import { getTableColumnAlign, getTelAutoDash, numberWithThousandSeparator } from '../@util';
import TableCommonCell from '../TableCommonCell';
import { TableItem } from '../Table/Table.types';
import dayjs from 'dayjs';
import useTableState from '../TableContext/useTableState';

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TableBodyCell: React.FC<Props> = ({
  item,
  index,
  column,
  defaultAlign,
  defaultEllipsis,
  onClick,
  onCheckChange,
}) => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const { menuOpen, setItemColumnChecked, setItemColumnCheckDisabled, setItemColumnCommands } = useTableState();

  // State -------------------------------------------------------------------------------------------------------------

  const [checked, setChecked] = useState(false);
  const [checkDisabled, setCheckDisabled] = useState(false);

  // Effect ------------------------------------------------------------------------------------------------------------

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

  // Memo --------------------------------------------------------------------------------------------------------------

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
          data = numberWithThousandSeparator(data);
        }
        break;
      case 'tel':
        if (typeof data === 'string') {
          data = getTelAutoDash(data);
        }
        break;
      case 'check':
        data = (
          <Box className='TableBoxyCell-check-box' onClick={menuOpen ? undefined : (e) => e.stopPropagation()}>
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
          <Box className='TableBoxyCell-button-box' onClick={menuOpen ? undefined : (e) => e.stopPropagation()}>
            {data}
          </Box>
        );
        break;
      case 'buttons':
        data = (
          <StyledButtonsBox
            className='TableBodyCell-buttons-box'
            justifyContent={buttonsBoxJustifyContent}
            onClick={menuOpen ? undefined : (e) => e.stopPropagation()}
          >
            {data}
          </StyledButtonsBox>
        );
        break;
    }

    switch (column.type) {
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
                className='TableBodyCell-tooltip'
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
          <Tooltip className='TableBodyCell-tooltip' title={tooltip} {...column.tooltipProps}>
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

  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleClick = useCallback(
    (item: TableItem, index: number) => {
      if (column.onClick) {
        column.onClick(item, index);
      } else {
        if (onClick) onClick(item, index);
      }
    },
    [column, onClick]
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <TableCommonCell
      type='body'
      className='TableBodyCell'
      column={column}
      defaultAlign={defaultAlign}
      defaultEllipsis={defaultEllipsis}
      item={item}
      index={index}
      onClick={column.onClick || onClick ? handleClick : undefined}
    >
      {!isHidden && data}
    </TableCommonCell>
  );
};

export default TableBodyCell;
