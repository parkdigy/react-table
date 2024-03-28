import React, { useMemo } from 'react';
import classNames from 'classnames';
import { TableButtonProps as Props, TableButtonDefaultProps } from './TableButton.types';
import { PdgButton } from '@pdg/react-component';

const TableButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, sx: initSx, color, icon, startIcon, endIcon, onClick, ...props }, ref) => {
    const sx = useMemo(
      () => ({
        minWidth: 0,
        px: 0.7,
        ...initSx,
      }),
      [initSx]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <PdgButton
        ref={ref}
        className={classNames(className, 'TableButton')}
        type='button'
        size='small'
        sx={sx}
        color={color}
        icon={icon}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
        {...props}
      >
        {children}
      </PdgButton>
    );
  }
);

TableButton.displayName = 'TableButton';
TableButton.defaultProps = TableButtonDefaultProps;

export default TableButton;
