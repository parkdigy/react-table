import React, { useMemo } from 'react';
import { PTableSortableBodyProps as Props } from './PTableSortableBody.types';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { PTableSortableBodyBlock } from '../PTableSortableBodyBlock';
import { chunkArray } from '../@util.private/chunkArray';
import useTableState from '../PTableContext/useTableState';
import { ifUndefined } from '@pdg/compare';
import { PTableItem } from '../PTable';

function PTableSortableBody<T extends PTableItem = PTableItem>({
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
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { progressiveVisible } = useTableState<T>();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const renderBlock = useMemo(() => {
    if (progressiveVisible) {
      return (
        <>
          {chunkArray(items, ifUndefined(progressiveVisible.blockSize, 20)).map((bItems, index) => (
            <PTableSortableBodyBlock
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
        <PTableSortableBodyBlock
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
}

export default PTableSortableBody;
