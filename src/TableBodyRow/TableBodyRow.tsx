import React, { CSSProperties } from 'react';
import { TableBodyRowProps as Props, TableBodyRowDefaultProps } from './TableBodyRow.types';
import { styled, TableRow, lighten } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TableColumn } from '../Table';
import TableBodyCell from '../TableBodyCell';

export const StyledBodyRow = styled(TableRow)(({ theme }) => ({
  '&:last-child > .MuiTableCell-root': {
    borderBottom: 0,
  },
  '&.odd-color:nth-of-type(odd):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
  '&.even-color:nth-of-type(even):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
}));

const TableBodyRow: React.FC<Props> = ({
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
  ...props
}) => {
  let finalStyle: CSSProperties | undefined;
  let sortableProps = {};

  if (sortable) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    finalStyle = {
      ...style,
      transform: CSS.Transform.toString(transform),
      transition,
    };

    sortableProps = {
      ref: setNodeRef,
      ...attributes,
      ...listeners,
    };
  } else {
    finalStyle = style;
  }

  return (
    <StyledBodyRow style={finalStyle} {...props} {...sortableProps}>
      {columns.map((column: TableColumn, columnIdx) => (
        <TableBodyCell
          key={columnIdx}
          index={index}
          item={item}
          defaultAlign={defaultAlign}
          defaultEllipsis={defaultEllipsis}
          column={column}
          onClick={onClick}
        />
      ))}
    </StyledBodyRow>
  );
};

TableBodyRow.displayName = 'TableBodyRow';
TableBodyRow.defaultProps = TableBodyRowDefaultProps;

export default TableBodyRow;
