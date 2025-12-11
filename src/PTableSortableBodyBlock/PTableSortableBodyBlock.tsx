import React, { useEffect, useMemo, useState } from 'react';
import { PTableSortableBodyBlockProps as Props } from './PTableSortableBodyBlock.types';
import PTableBodyRow from '../PTableBodyRow';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { TableCell, TableRow } from '@mui/material';
import useTableState from '../PTableContext/useTableState';
import { ifUndefined } from '@pdg/compare';

export const PTableSortableBodyBlock = ({
  items,
  baseIndex,
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
  const { progressiveVisible } = useTableState();

  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [canInView, setCanInView] = useState(baseIndex === 0);

  /********************************************************************************************************************
   * Effect
   * ******************************************************************************************************************/

  useEffect(() => {
    if (progressiveVisible && baseIndex > 0) {
      setTimeout(
        () => {
          setCanInView(true);
        },
        baseIndex * ifUndefined(progressiveVisible.delay, 300)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progressiveVisible]);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const renderItems = useMemo(
    () =>
      !progressiveVisible || inView ? (
        items.map((item, idx) => (
          <PTableBodyRow
            key={item.id}
            id={item.id}
            index={baseIndex + idx}
            className={classNames(
              showOddColor && 'odd-color',
              showEvenColor && 'even-color',
              onGetBodyRowClassName ? onGetBodyRowClassName(item, baseIndex + idx) : undefined
            )}
            style={onGetBodyRowStyle ? onGetBodyRowStyle(item, baseIndex + idx) : undefined}
            sx={onGetBodyRowSx ? onGetBodyRowSx(item, baseIndex + idx) : undefined}
            hover
            onGetColumnClassName={onGetBodyColumnClassName}
            onGetColumnStyle={onGetBodyColumnStyle}
            onGetColumnSx={onGetBodyColumnSx}
            defaultAlign={defaultAlign}
            defaultEllipsis={defaultEllipsis}
            sortable={sortable}
            columns={columns}
            item={item}
            onClick={onClick}
            onCheckChange={onCheckChange}
          />
        ))
      ) : (
        <TableRow ref={canInView ? ref : undefined}>
          <TableCell
            colSpan={columns.length}
            style={{ height: progressiveVisible.rowHeight * items.length, border: 'none' }}
          />
        </TableRow>
      ),
    [
      baseIndex,
      canInView,
      columns,
      defaultAlign,
      defaultEllipsis,
      inView,
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
      ref,
      showEvenColor,
      showOddColor,
      sortable,
    ]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return <>{renderItems}</>;
};

export default PTableSortableBodyBlock;
