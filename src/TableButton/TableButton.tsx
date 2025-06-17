import React from 'react';
import classNames from 'classnames';
import { TableButtonProps as Props } from './TableButton.types';
import { PdgButton } from '@pdg/react-component';
import { empty } from '@pdg/compare';

const TableButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    { children, className, sx: initSx, variant = 'outlined', color = 'primary', startIcon, endIcon, onClick, ...props },
    ref
  ) => {
    return (
      <PdgButton
        ref={ref}
        className={classNames(className, 'TableButton')}
        variant={variant}
        type='button'
        size='small'
        sx={{
          minWidth: 0,
          px:
            empty(startIcon) && empty(endIcon)
              ? '7px !important'
              : empty(children)
                ? '5px !important'
                : '7px !important',
          ...initSx,
        }}
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

export default React.memo(TableButton);
