import React, { useMemo } from 'react';
import classNames from 'classnames';
import { TableButtonProps as Props, TableButtonDefaultProps } from './TableButton.types';
import { PdgButton } from '@pdg/react-component';

const TableButton = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, sx: initSx, color, onClick, ...props }, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/

    const sx = useMemo(
      () => ({
        minWidth: 0,
        px: '5px !important',
        ...initSx,
      }),
      [initSx]
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
