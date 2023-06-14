import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Icon } from '@mui/material';
import { TableIconProps as Props, TableIconDefaultProps } from './TableIcon.types';

const TableIcon = React.forwardRef<HTMLAnchorElement, Props>(({ className, children: initChildren, ...props }, ref) => {
  // Memo --------------------------------------------------------------------------------------------------------------

  const children = useMemo(
    () => initChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`),
    [initChildren]
  );

  // Render ----------------------------------------------------------------------------------------------------------

  return (
    <Icon ref={ref} {...props} className={classNames('TableIcon', className)}>
      {children}
    </Icon>
  );
});

TableIcon.displayName = 'TableIcon';
TableIcon.defaultProps = TableIconDefaultProps;

export default TableIcon;
