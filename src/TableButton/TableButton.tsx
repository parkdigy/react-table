import React, { useMemo } from 'react';
import classNames from 'classnames';
import { TableButtonProps as Props, TableButtonDefaultProps } from './TableButton.types';
import { PdgButton } from '@pdg/react-component';
import { empty } from '@pdg/util';

const TableButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, sx: initSx, color, startIcon, endIcon, onClick, ...props }, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const sx = useMemo(
      () => ({
        minWidth: 0,
        px:
          empty(startIcon) && empty(endIcon) ? '7px !important' : empty(children) ? '5px !important' : '7px !important',
        ...initSx,
      }),
      [children, endIcon, initSx, startIcon]
    );

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <PdgButton
        ref={ref}
        className={classNames(className, 'TableButton')}
        type='button'
        size='small'
        sx={sx}
        color={color}
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
