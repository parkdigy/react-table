import React, { useMemo } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { TableButtonProps as Props, TableButtonDefaultProps } from './TableButton.types';
import { PdgIcon } from '@pdg/react-component';

const TableButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, sx: initSx, color, icon, startIcon, endIcon, onClick, ...props }, ref) => {
    const sx = useMemo(
      () => ({ minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7, ...initSx }),
      [endIcon, initSx, startIcon]
    );

    // Render ----------------------------------------------------------------------------------------------------------

    return (
      <Button
        ref={ref}
        className={classNames(className, 'TableButton')}
        type='button'
        size='small'
        sx={sx}
        color={color}
        onClick={onClick}
        startIcon={
          startIcon ? (
            <PdgIcon fontSize='small' sx={{ mr: -0.5 }}>
              {startIcon}
            </PdgIcon>
          ) : undefined
        }
        endIcon={
          endIcon ? (
            <PdgIcon fontSize='small' sx={{ ml: -0.5 }}>
              {endIcon}
            </PdgIcon>
          ) : undefined
        }
        {...props}
      >
        {icon && (
          <PdgIcon fontSize='small' color={color}>
            {icon}
          </PdgIcon>
        )}
        {children}
      </Button>
    );
  }
);

TableButton.displayName = 'TableButton';
TableButton.defaultProps = TableButtonDefaultProps;

export default TableButton;
