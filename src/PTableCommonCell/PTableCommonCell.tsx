import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { TableCell, styled } from '@mui/material';
import { PTableCommonCellProps as Props } from './PTableCommonCell.types';
import { getTableColumnAlign } from '../@util.private';
import { PTableCommonSxProps } from '../@types';
import useTableState from '../PTableContext/useTableState';
import { PTableItem } from '../PTable';

const StyledTableCell = styled(TableCell)`
  &.ellipsis {
    position: relative;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

function PTableCommonCell<T extends PTableItem = PTableItem>({
  ref,
  children,
  className: initClassName,
  style: initStyle,
  sx: initSx,
  type,
  column,
  defaultAlign,
  defaultEllipsis: initDefaultEllipsis,
  index,
  item,
  onClick,
}: Props<T>) {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { menuOpen } = useTableState();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  /** align, ellipsis */
  const { align, ellipsis } = useMemo(() => {
    const align = getTableColumnAlign(column, defaultAlign);

    const ellipsis =
      type !== 'head' &&
      (column.ellipsis ||
        (column.type !== 'img' &&
          column.type !== 'button' &&
          column.type !== 'buttons' &&
          (column.ellipsis == null ? !!initDefaultEllipsis : false)));

    return { align, ellipsis };
  }, [column, defaultAlign, initDefaultEllipsis, type]);

  /** className */
  const className = useMemo(() => {
    let className: PTableCommonSxProps['className'];
    let getClassName: PTableCommonSxProps['className'];

    switch (type) {
      case 'head':
        className = column.head?.className;
        getClassName = column.head?.onGetClassName ? column.head?.onGetClassName() : undefined;
        break;
      case 'body':
        className = column.className;
        if (item != null && index != null) {
          getClassName = column.onGetClassName ? column.onGetClassName(item, index) : undefined;
        }
        break;
      case 'footer':
        className = column.footer?.className;
        getClassName = column.footer?.onGetClassName ? column.footer?.onGetClassName() : undefined;
        break;
    }

    if (className || getClassName) {
      return classNames(initClassName, className, getClassName);
    } else {
      return initClassName;
    }
  }, [column, index, initClassName, item, type]);

  /** style */
  const style = useMemo(() => {
    let style: PTableCommonSxProps['style'];
    let getStyle: PTableCommonSxProps['style'];

    switch (type) {
      case 'head':
        style = column.head?.backgroundColor
          ? { ...column.head?.style, backgroundColor: column.head.backgroundColor }
          : column.head?.style;
        getStyle = column.head?.onGetStyle ? column.head?.onGetStyle() : undefined;
        break;
      case 'body':
        style = column.backgroundColor ? { ...column.style, backgroundColor: column.backgroundColor } : column.style;
        if (item != null && index != null) {
          getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
        }
        break;
      case 'footer':
        style = column.footer?.backgroundColor
          ? { ...column.footer?.style, backgroundColor: column.footer.backgroundColor }
          : column.footer?.style;
        getStyle = column.footer?.onGetStyle ? column.footer?.onGetStyle() : undefined;
        break;
    }

    return {
      ...initStyle,
      width: column.width,
      minWidth: column.minWidth,
      cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined,
      paddingLeft: column.paddingLeft,
      paddingRight: column.paddingRight,
      ...style,
      ...getStyle,
    };
  }, [column, index, initStyle, item, onClick, type]);

  /** sx */
  const sx = useMemo(() => {
    let sx: PTableCommonSxProps['sx'];
    let getSx: PTableCommonSxProps['sx'];
    let displaySx: PTableCommonSxProps['sx'];

    switch (type) {
      case 'head':
        sx = column.head?.sx;
        getSx = column.head?.onGetSx ? column.head?.onGetSx() : undefined;
        break;
      case 'body':
        sx = column.sx;
        if (item != null && index != null) {
          getSx = column.onGetSx ? column.onGetSx(item, index) : undefined;
        }
        break;
      case 'footer':
        sx = column.footer?.sx;
        getSx = column.footer?.onGetSx ? column.footer?.onGetSx() : undefined;
        break;
    }

    if (column.display) {
      type DisplayValue = 'none' | 'table-cell';
      const display: {
        xs?: DisplayValue;
        sm?: DisplayValue;
        md?: DisplayValue;
        lg?: DisplayValue;
        xl?: DisplayValue;
      } = {};
      if (column.display.xs !== undefined) display.xs = column.display.xs ? 'table-cell' : 'none';
      if (column.display.sm !== undefined) display.sm = column.display.sm ? 'table-cell' : 'none';
      if (column.display.md !== undefined) display.md = column.display.md ? 'table-cell' : 'none';
      if (column.display.lg !== undefined) display.lg = column.display.lg ? 'table-cell' : 'none';
      if (column.display.xl !== undefined) display.xl = column.display.xl ? 'table-cell' : 'none';
      displaySx = { display };
    }

    const sxList = [];
    if (getSx) sxList.push(getSx);
    if (sx) sxList.push(sx);
    if (initSx) sxList.push(initSx);
    if (displaySx) sxList.push(displaySx);

    if (sxList.length > 0) {
      if (sxList.length === 1) {
        return sxList[0];
      } else {
        if (!sxList.find((sx) => typeof sx !== 'object')) {
          return sxList.reduce((res: object, sx: object) => {
            res = { ...res, ...sx };
            return res;
          }, {});
        }
      }
    }
  }, [column, index, initSx, item, type]);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLTableCellElement>) => {
      if (
        !menuOpen &&
        column.type !== 'check' &&
        column.type !== 'button' &&
        column.type !== 'buttons' &&
        column.type !== 'img'
      ) {
        e.stopPropagation();

        if (type === 'body') {
          if (item != null && index != null) {
            if (column.onClick) {
              column.onClick(item, index);
            } else {
              if (onClick) onClick(item, index);
            }
          }
        }
      }
    },
    [menuOpen, type, item, index, column, onClick]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <StyledTableCell
      ref={ref}
      align={align}
      className={classNames(
        className,
        'PTableCommonCell',
        ellipsis && 'ellipsis',
        column.type ? `column-type-${column.type}` : false
      )}
      style={style}
      sx={sx}
      onClick={type === 'body' ? handleClick : undefined}
    >
      {children}
    </StyledTableCell>
  );
}
export default PTableCommonCell;
