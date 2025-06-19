import React from 'react';
import classNames from 'classnames';
import { PTableBodyRowProps as Props } from './PTableBodyRow.types';
import { styled, TableRow, lighten } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PTableColumn } from '../PTable';
import PTableBodyCell from '../PTableBodyCell';

export const PStyledBodyRow = styled(TableRow)(({ theme }) => ({
  '&.odd-color:nth-of-type(odd):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
  '&.even-color:nth-of-type(even):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
}));

const PTableBodyRow: React.FC<Props> = ({
  className,
  style,
  id,
  index,
  defaultAlign,
  defaultEllipsis,
  sortable,
  columns,
  item,
  onClick,
  onCheckChange,
  onGetColumnClassName,
  onGetColumnStyle,
  onGetColumnSx,
  ...props
}) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const sortableProps = sortable
    ? {
        ref: setNodeRef,
        ...attributes,
        ...listeners,
      }
    : {};

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <PStyledBodyRow
        className={classNames('PTableBodyRow', className)}
        style={
          sortable
            ? {
                ...style,
                transform: CSS.Transform.toString(transform),
                transition,
              }
            : style
        }
        {...props}
        {...sortableProps}
      >
        {columns.map((column: PTableColumn, columnIdx) => (
          <PTableBodyCell
            className={onGetColumnClassName ? onGetColumnClassName(column, item, index) : undefined}
            sx={onGetColumnSx ? onGetColumnSx(column, item, index) : undefined}
            style={onGetColumnStyle ? onGetColumnStyle(column, item, index) : undefined}
            key={columnIdx}
            index={index}
            item={item}
            defaultAlign={defaultAlign}
            defaultEllipsis={defaultEllipsis}
            column={column}
            onClick={onClick}
            onCheckChange={onCheckChange}
          />
        ))}
      </PStyledBodyRow>
    </>
  );
};

export default PTableBodyRow;
