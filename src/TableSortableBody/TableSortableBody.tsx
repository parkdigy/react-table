import React, { useMemo } from 'react';
import { TableSortableBodyProps as Props } from './TableSortableBody.types';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { TableSortableBodyBlock } from '../TableSortableBodyBlock';
import { chunkArray } from '../@util.private/chunkArray';
import useTableState from '../TableContext/useTableState';

export const TableSortableBody = ({
  items,
  columns,
  showOddColor,
  showEvenColor,
  onGetBodyRowStyle,
  onGetBodyRowSx,
  onGetBodyRowClassName,
  onGetBodyColumnClassName,
  onGetBodyColumnStyle,
  onGetBodyColumnSx,
  defaultAlign,
  defaultEllipsis,
  sortable,
  onClick,
  onCheckChange,
}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { progressiveVisible } = useTableState();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const renderBlock = useMemo(() => {
    if (progressiveVisible) {
      return (
        <>
          {chunkArray(items, 5).map((bItems, index) => (
            <TableSortableBodyBlock
              key={index}
              items={bItems}
              baseIndex={index}
              columns={columns}
              showOddColor={showOddColor}
              showEvenColor={showEvenColor}
              onGetBodyRowStyle={onGetBodyRowStyle}
              onGetBodyRowSx={onGetBodyRowSx}
              onGetBodyRowClassName={onGetBodyRowClassName}
              onGetBodyColumnClassName={onGetBodyColumnClassName}
              onGetBodyColumnStyle={onGetBodyColumnStyle}
              onGetBodyColumnSx={onGetBodyColumnSx}
              defaultAlign={defaultAlign}
              defaultEllipsis={defaultEllipsis}
              sortable={sortable}
              onClick={onClick}
              onCheckChange={onCheckChange}
            />
          ))}
        </>
      );
    } else {
      return (
        <TableSortableBodyBlock
          items={items}
          baseIndex={0}
          columns={columns}
          showOddColor={showOddColor}
          showEvenColor={showEvenColor}
          onGetBodyRowStyle={onGetBodyRowStyle}
          onGetBodyRowSx={onGetBodyRowSx}
          onGetBodyRowClassName={onGetBodyRowClassName}
          onGetBodyColumnClassName={onGetBodyColumnClassName}
          onGetBodyColumnStyle={onGetBodyColumnStyle}
          onGetBodyColumnSx={onGetBodyColumnSx}
          defaultAlign={defaultAlign}
          defaultEllipsis={defaultEllipsis}
          sortable={sortable}
          onClick={onClick}
          onCheckChange={onCheckChange}
        />
      );
    }
  }, [
    columns,
    defaultAlign,
    defaultEllipsis,
    items,
    onCheckChange,
    onClick,
    onGetBodyColumnClassName,
    onGetBodyColumnStyle,
    onGetBodyColumnSx,
    onGetBodyRowClassName,
    onGetBodyRowStyle,
    onGetBodyRowSx,
    progressiveVisible,
    showEvenColor,
    showOddColor,
    sortable,
  ]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return sortable ? (
    <SortableContext items={items} strategy={verticalListSortingStrategy}>
      {renderBlock}
    </SortableContext>
  ) : (
    renderBlock
  );
};

export default TableSortableBody;
