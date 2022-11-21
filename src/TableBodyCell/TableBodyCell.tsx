import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { Box, styled, Tooltip } from '@mui/material';
import { TableBodyCellProps as Props } from './TableBodyCell.types';
import { numberWithThousandSeparator } from '../@util';
import TableCommonCell from '../TableCommonCell';
import { TableItem } from '../Table/Table.types';
import dayjs from "dayjs";

const StyledButtonsBox = styled(Box)`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const TableBodyCell: React.FC<Props> = ({ item, index, column, defaultAlign, defaultEllipsis, onClick }) => {
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
        data = <Box onClick={(e) => e.stopPropagation()}>{data}</Box>;
        break;
      case 'buttons':
        data = <StyledButtonsBox onClick={(e) => e.stopPropagation()}>{data}</StyledButtonsBox>;
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
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.stopPropagation();
              }}
            >
              <Tooltip
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
        if (data && data instanceof Date) {
          data = dayjs(data).format('YYYY-MM-DD')
        }
        break;
      case 'datetime':
        if (data && data instanceof Date) {
          data = dayjs(data).format('YYYY-MM-DD HH:mm:ss')
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
              <Tooltip title={tooltip} {...column.tooltipProps}>
                {React.isValidElement(data) ? data : <span>{data}</span>}
              </Tooltip>
            );
          }
        }
        break;
    }

    setData(data);
  }, [item, column]);

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
