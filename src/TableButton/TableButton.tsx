import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Button } from '@mui/material';
import { TableButtonProps as Props, TableButtonDefaultProps } from './TableButton.types';
import TableIcon from '../TableIcon';
import { useAutoUpdateState } from '@pdg/react-hook';

const TableButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, sx: initSx, color, icon, startIcon, endIcon, onClick, ...props }, ref) => {
    // State -----------------------------------------------------------------------------------------------------------

    const [sx] = useAutoUpdateState<Props['sx']>(
      useCallback(() => {
        return { minWidth: 0, px: !startIcon && !endIcon ? 0.7 : 1.7, ...initSx };
      }, [initSx])
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
            <TableIcon fontSize='small' sx={{ mr: -0.5 }}>
              {startIcon}
            </TableIcon>
          ) : undefined
        }
        endIcon={
          endIcon ? (
            <TableIcon fontSize='small' sx={{ ml: -0.5 }}>
              {endIcon}
            </TableIcon>
          ) : undefined
        }
        {...props}
      >
        {icon && (
          <TableIcon fontSize='small' color={color}>
            {icon}
          </TableIcon>
        )}
        {children}
      </Button>
    );
  }
);

TableButton.displayName = 'TableButton';
TableButton.defaultProps = TableButtonDefaultProps;

export default TableButton;
