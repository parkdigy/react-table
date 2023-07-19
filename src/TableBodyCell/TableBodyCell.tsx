import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Box, styled, Tooltip } from '@mui/material';
import { TableBodyCellProps as Props } from './TableBodyCell.types';
import { getTableColumnAlign, numberWithThousandSeparator } from '../@util';
import TableCommonCell from '../TableCommonCell';
import { TableItem } from '../Table/Table.types';
import dayjs from 'dayjs';
import useTableState from '../TableContext/useTableState';

const StyledButtonsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TableBodyCell: React.FC<Props> = ({ item, index, column, defaultAlign, defaultEllipsis, onClick }) => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const { menuOpen } = useTableState();

  // Memo --------------------------------------------------------------------------------------------------------------

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

  // State -----------------------------------------------------------------------------------------------------------

  const [data, setData] = useState<ReactNode>();

  // Effect ----------------------------------------------------------------------------------------------------------

  useEffect(() => {
    let data;
    if (column.onRender) {
      data = column.onRender(item, index);
    } else if (column.name) {
      data = item[column.name];
    } else {
      data = undefined;
    }

    switch (column.type) {
      case 'number':
        if (typeof data === 'string' || typeof data === 'number') {
          data = numberWithThousandSeparator(data);
        }
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
          data = dayjs(data, column.dateFormat).format('YYYY-MM-DD HH:mm:ss');
        }
        break;
      default:
        {
          let tooltip: ReactNode;
          if (column.onGetTooltip) {
            tooltip = column.onGetTooltip(item, index);
          }
          if (tooltip) {
            data = (
              <Tooltip className='TableBodyCell-tooltip' title={tooltip} {...column.tooltipProps}>
                {React.isValidElement(data) ? data : <span>{data}</span>}
              </Tooltip>
            );
          }
        }
        break;
    }

    setData(data);
  }, [item, column, index, buttonsBoxJustifyContent, menuOpen]);

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
      {data}
    </TableCommonCell>
  );
};

export default TableBodyCell;
