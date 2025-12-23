import React, { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';
import { PTableBodyRowProps as Props } from './PTableBodyRow.types';
import { styled, TableRow, lighten } from '@mui/material';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PTableColumn, PTableItem } from '../PTable';
import PTableBodyCell from '../PTableBodyCell';

export const PStyledBodyRow = styled(TableRow)(({ theme }) => ({
  '&.odd-color:nth-of-type(odd):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
  '&.even-color:nth-of-type(even):not(:hover)': {
    backgroundColor: lighten(theme.palette.action.hover, 0.4),
  },
}));

function PTableBodyRow<T extends PTableItem = PTableItem>({
  className,
  style: initStyle,
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
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

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

  const style = useMemo(
    (): CSSProperties | undefined =>
      sortable
        ? {
            ...initStyle,
            transform: CSS.Transform.toString(transform),
            transition,
          }
        : initStyle,
    [initStyle, sortable, transform, transition]
  );

  const cellList = useMemo(
    () =>
      columns.map((column: PTableColumn<T>, columnIdx) => (
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
      )),
    [
      columns,
      defaultAlign,
      defaultEllipsis,
      index,
      item,
      onCheckChange,
      onClick,
      onGetColumnClassName,
      onGetColumnStyle,
      onGetColumnSx,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <>
      <PStyledBodyRow className={classNames('PTableBodyRow', className)} style={style} {...props} {...sortableProps}>
        {cellList}
      </PStyledBodyRow>
    </>
  );
}

export default PTableBodyRow;
