import React, { ReactNode, useCallback, useMemo, useRef } from 'react';
import { PTableTopHeadProps as Props, PTableTopHeadRowColumnValue } from './PTableTopHead.types';
import { styled, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { PTableTopHeadCaptionRow } from './PTableTopHead.style.private';
import PTableHeadCell from '../PTableHeadCell';
import { PTableItem } from '../PTable';

const BottomLine = styled('div')`
  height: 1px;
  position: absolute;
  left: 3px;
  right: 3px;
  bottom: 0;
`;

function PTableTopHead<T extends PTableItem = PTableItem>({
  columns,
  items,
  rows,
  caption,
  defaultAlign,
  onCheckChange,
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const captionRef = useRef<HTMLTableRowElement>(null);
  const row1Ref = useRef<HTMLTableRowElement>(null);
  const row2Ref = useRef<HTMLTableRowElement>(null);
  const row3Ref = useRef<HTMLTableRowElement>(null);

  /********************************************************************************************************************
   * ResizeDetector
   * ******************************************************************************************************************/

  const { height: captionHeight } = useResizeDetector({
    targetRef: captionRef,
    handleWidth: false,
    handleHeight: true,
  });
  const { height: row1Height } = useResizeDetector({ targetRef: row1Ref, handleWidth: false, handleHeight: true });
  const { height: row2Height } = useResizeDetector({ targetRef: row2Ref, handleWidth: false, handleHeight: true });
  const { height: row3Height } = useResizeDetector({ targetRef: row3Ref, handleWidth: false, handleHeight: true });

  /********************************************************************************************************************
   * Function
   * ******************************************************************************************************************/

  const makeRowCells = useCallback(
    (row: PTableTopHeadRowColumnValue[], top?: number) => {
      let totalColumns = 0;
      const cells = row
        .map((info, idx) => {
          if (info) {
            totalColumns += info.colSpan || 1;
            return (
              <TableCell
                key={idx}
                colSpan={info.colSpan}
                align={info.align}
                style={{
                  top,
                  borderBottom: 0,
                }}
              >
                {info.label}
                {info.label != null && <BottomLine style={{ backgroundColor: theme.palette.divider }} />}
              </TableCell>
            );
          }
        })
        .filter((cell) => !!cell) as ReactNode[];

      if (totalColumns < columns.length) {
        cells.push(
          <TableCell key={columns.length} colSpan={columns.length - cells.length} style={{ top, borderBottom: 0 }} />
        );
      }

      return cells;
    },
    [columns, theme.palette.divider]
  );

  const columnRow = useMemo(() => {
    const top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);

    return (
      <TableRow>
        {columns.map((column, idx) => (
          <PTableHeadCell
            key={idx}
            column={column}
            items={items}
            defaultAlign={defaultAlign}
            top={top}
            onCheckChange={onCheckChange}
          />
        ))}
      </TableRow>
    );
  }, [captionHeight, columns, defaultAlign, items, onCheckChange, row1Height, row2Height, row3Height]);

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  const captionRow = !!caption && (
    <PTableTopHeadCaptionRow ref={captionRef} className='PTableTopHeadCaptionRow'>
      <TableCell colSpan={columns.length}>{caption}</TableCell>
    </PTableTopHeadCaptionRow>
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  if (rows) {
    if (Array.isArray(rows[0])) {
      return (
        <TableHead className='PTableHead'>
          {captionRow}
          {rows.map((row, idx) => {
            let ref: React.Ref<HTMLTableRowElement> | undefined = undefined;
            let top: number | undefined = undefined;

            switch (idx) {
              case 0:
                ref = row1Ref;
                top = captionHeight;
                break;
              case 1:
                ref = row2Ref;
                top = (captionHeight || 0) + (row1Height || 0);
                break;
              case 2:
                ref = row3Ref;
                top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0);
                break;
              case 3:
                top = (captionHeight || 0) + (row1Height || 0) + (row2Height || 0) + (row3Height || 0);
            }
            return (
              <TableRow key={idx} ref={ref} className='PTableHeadRow'>
                {makeRowCells(row as PTableTopHeadRowColumnValue[], top)}
              </TableRow>
            );
          })}
        </TableHead>
      );
    } else {
      return (
        <TableHead className='PTableHead'>
          {captionRow}
          <TableRow ref={row1Ref} className='PTableHeadRow'>
            {makeRowCells(rows as PTableTopHeadRowColumnValue[], captionHeight)}
          </TableRow>
          {columnRow}
        </TableHead>
      );
    }
  } else {
    return (
      <TableHead className='PTableHead'>
        {captionRow}
        {columnRow}
      </TableHead>
    );
  }
}

export default PTableTopHead;
