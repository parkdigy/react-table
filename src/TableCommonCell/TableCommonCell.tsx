import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { TableCell, styled } from '@mui/material';
import { TableCommonCellProps } from './TableCommonCell.types';
import { getTableColumnAlign } from '../@util';
import { CommonSxProps } from '../@types';

const StyledTableCell = styled(TableCell)`
  &.ellipsis {
    position: relative;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const TableCommonCell: React.FC<TableCommonCellProps> = ({
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
}) => {
  const align = useMemo(() => getTableColumnAlign(column, defaultAlign), [column, defaultAlign]);

  const ellipsis = useMemo(
    () => (column.ellipsis != null ? column.ellipsis : !!initDefaultEllipsis),
    [column, initDefaultEllipsis]
  );

  const className = useMemo(() => {
    let className: CommonSxProps['className'];
    let getClassName: CommonSxProps['className'];

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

  const style = useMemo(() => {
    let style: CommonSxProps['style'];
    let getStyle: CommonSxProps['style'];

    switch (type) {
      case 'head':
        style = column.head?.style;
        getStyle = column.head?.onGetStyle ? column.head?.onGetStyle() : undefined;
        break;
      case 'body':
        style = column.style;
        if (item != null && index != null) {
          getStyle = column.onGetStyle ? column.onGetStyle(item, index) : undefined;
        }
        break;
      case 'footer':
        style = column.footer?.style;
        getStyle = column.footer?.onGetStyle ? column.footer?.onGetStyle() : undefined;
        break;
    }

    return {
      ...initStyle,
      width: column.width,
      minWidth: column.minWidth,
      cursor: type === 'body' && (column.onClick || onClick) ? 'pointer' : undefined,
      ...style,
      ...getStyle,
    };
  }, [column, index, initStyle, item, onClick, type]);

  const sx = useMemo(() => {
    let sx: CommonSxProps['sx'];
    let getSx: CommonSxProps['sx'];

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

    const sxList = [];
    if (getSx) sxList.push(getSx);
    if (sx) sxList.push(sx);
    if (initSx) sxList.push(initSx);

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

  // Event Handler ---------------------------------------------------------------------------------------------------

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLTableCellElement>) => {
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
    },
    [type, column, onClick, item, index]
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <StyledTableCell
      align={align}
      className={classNames(
        className,
        'TableCommonCell',
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
};

export default TableCommonCell;
