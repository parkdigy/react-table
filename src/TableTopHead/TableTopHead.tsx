import React, { ReactNode, useCallback, useMemo, useRef } from 'react';
import { TableTopHeadProps as Props, TableTopHeadRowColumnValue } from './TableTopHead.types';
import { styled, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { TableTopHeadCaptionRow } from './TableTopHead.style.private';
import TableHeadCell from '../TableHeadCell';

const BottomLine = styled('div')`
  height: 1px;
  position: absolute;
  left: 3px;
  right: 3px;
  bottom: 0;
`;

const TableTopHead: React.FC<Props> = ({ columns, rows, caption, defaultAlign, onCheckChange }) => {
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

  const captionRow = useMemo(
    () =>
      !!caption && (
        <TableTopHeadCaptionRow ref={captionRef} className='TableTopHeadCaptionRow'>
          <TableCell colSpan={columns.length}>{caption}</TableCell>
        </TableTopHeadCaptionRow>
      ),
    [caption, columns]
  );

  const makeRowCells = useCallback(
    (row: TableTopHeadRowColumnValue[], top?: number) => {
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
          <TableHeadCell
            key={idx}
            column={column}
            defaultAlign={defaultAlign}
            top={top}
            onCheckChange={onCheckChange}
          />
        ))}
      </TableRow>
    );
  }, [captionHeight, columns, defaultAlign, onCheckChange, row1Height, row2Height, row3Height]);

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  if (rows) {
    if (Array.isArray(rows[0])) {
      return (
        <TableHead className='TableHead'>
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
              <TableRow key={idx} ref={ref} className='TableHeadRow'>
                {makeRowCells(row as TableTopHeadRowColumnValue[], top)}
              </TableRow>
            );
          })}
        </TableHead>
      );
    } else {
      return (
        <TableHead className='TableHead'>
          {captionRow}
          <TableRow ref={row1Ref} className='TableHeadRow'>
            {makeRowCells(rows as TableTopHeadRowColumnValue[], captionHeight)}
          </TableRow>
          {columnRow}
        </TableHead>
      );
    }
  } else {
    return (
      <TableHead className='TableHead'>
        {captionRow}
        {columnRow}
      </TableHead>
    );
  }
};

export default TableTopHead;
