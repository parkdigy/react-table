import React, { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import { TableTopHeadProps as Props, TableTopHeadDefaultProps, TableTopHeadRowColumnValue } from './TableTopHead.types';
import { styled, TableCell, TableHead, TableRow, useTheme } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { TableTopHeadCaptionRow } from './TableTopHead.style';

const BottomLine = styled('div')`
  height: 1px;
  position: absolute;
  left: 3px;
  right: 3px;
  bottom: 0;
`;

const TableTopHead: React.FC<Props> = ({ columnLength, rows, caption, onHeightChange }) => {
  // Use ---------------------------------------------------------------------------------------------------------------

  const theme = useTheme();

  // Ref ---------------------------------------------------------------------------------------------------------------

  const headRef = useRef<HTMLTableSectionElement>(null);
  const captionRef = useRef<HTMLTableRowElement>(null);
  const row1Ref = useRef<HTMLTableRowElement>(null);
  const row2Ref = useRef<HTMLTableRowElement>(null);
  const row3Ref = useRef<HTMLTableRowElement>(null);

  // ResizeDetector ----------------------------------------------------------------------------------------------------

  const { height: headHeight } = useResizeDetector({ targetRef: headRef, handleWidth: false, handleHeight: true });
  const { height: captionHeight } = useResizeDetector({
    targetRef: captionRef,
    handleWidth: false,
    handleHeight: true,
  });
  const { height: row1Height } = useResizeDetector({ targetRef: row1Ref, handleWidth: false, handleHeight: true });
  const { height: row2Height } = useResizeDetector({ targetRef: row2Ref, handleWidth: false, handleHeight: true });
  const { height: row3Height } = useResizeDetector({ targetRef: row3Ref, handleWidth: false, handleHeight: true });

  useEffect(() => {
    onHeightChange && onHeightChange(headHeight || 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headHeight]);

  // Function ----------------------------------------------------------------------------------------------------------

  const captionRow = useMemo(
    () =>
      !!caption && (
        <TableTopHeadCaptionRow ref={captionRef} className='TableTopHeadCaptionRow'>
          <TableCell colSpan={columnLength}>{caption}</TableCell>
        </TableTopHeadCaptionRow>
      ),
    [caption, columnLength]
  );

  const makeRowCells = useCallback(
    (row: TableTopHeadRowColumnValue[], top?: number) => {
      const cells = row
        .map(
          (info, idx) =>
            !!info && (
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
            )
        )
        .filter((cell) => !!cell) as ReactNode[];

      if (cells.length < columnLength) {
        cells.push(
          <TableCell key={columnLength} colSpan={columnLength - cells.length} style={{ top, borderBottom: 0 }} />
        );
      }
      return cells;
    },
    [columnLength, theme.palette.divider]
  );

  // Render ------------------------------------------------------------------------------------------------------------

  if ((!rows || rows.length === 0) && caption === null) return null;

  if (rows) {
    if (Array.isArray(rows[0])) {
      return (
        <TableHead className='TableTopHead' ref={headRef}>
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
              <TableRow key={idx} ref={ref} className='TableTopHeadRow'>
                {makeRowCells(row as TableTopHeadRowColumnValue[], top)}
              </TableRow>
            );
          })}
        </TableHead>
      );
    } else {
      return (
        <TableHead className='TableTopHead' ref={headRef}>
          {captionRow}
          <TableRow className='TableTopHeadRow'>
            {makeRowCells(rows as TableTopHeadRowColumnValue[], captionHeight)}
          </TableRow>
        </TableHead>
      );
    }
  } else {
    return (
      <TableHead className='TableTopHead' ref={headRef}>
        {captionRow}
      </TableHead>
    );
  }
};

TableTopHead.displayName = 'TableTopHead';
TableTopHead.defaultProps = TableTopHeadDefaultProps;

export default TableTopHead;
