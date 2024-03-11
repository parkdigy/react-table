import React, { useMemo } from 'react';
import classNames from 'classnames';
import { TableBodyRowProps as Props, TableBodyRowDefaultProps } from './TableBodyRow.types';
import { styled, TableRow, lighten } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableColumn } from '../Table';
import TableBodyCell from '../TableBodyCell';

export const StyledBodyRow = styled(TableRow)(({ theme }) => ({
  '&.odd-color:nth-of-type(odd):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
  '&.even-color:nth-of-type(even):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
}));

const TableBodyRow: React.FC<Props> = ({
  className,
  style,
  //--------------------------------------------------------------------------------------------------------------------
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
  // -------------------------------------------------------------------------------------------------------------------
  ...props
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const finalStyle = useMemo(
    () =>
      sortable
        ? {
            ...style,
            transform: CSS.Transform.toString(transform),
            transition,
          }
        : style,
    [sortable, style, transform, transition]
  );

  const sortableProps = useMemo(
    () =>
      sortable
        ? {
            ref: setNodeRef,
            ...attributes,
            ...listeners,
          }
        : {},
    [attributes, listeners, setNodeRef, sortable]
  );

  return (
    <StyledBodyRow className={classNames('TableBodyRow', className)} style={finalStyle} {...props} {...sortableProps}>
      {columns.map((column: TableColumn, columnIdx) => (
        <TableBodyCell
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
    </StyledBodyRow>
  );
};

TableBodyRow.displayName = 'TableBodyRow';
TableBodyRow.defaultProps = TableBodyRowDefaultProps;

export default TableBodyRow;
