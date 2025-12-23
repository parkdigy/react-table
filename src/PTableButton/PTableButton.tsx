import React from 'react';
import classNames from 'classnames';
import { PTableButtonProps as Props } from './PTableButton.types';
import { PButton } from '@pdg/react-component';
import { empty } from '@pdg/compare';

const PTableButton = ({
  children,
  className,
  sx: initSx,
  variant = 'outlined',
  color = 'primary',
  startIcon,
  endIcon,
  onClick,
  ...props
}: Props) => {
  return (
    <PButton
      className={classNames(className, 'PTableButton')}
      variant={variant}
      type='button'
      size='small'
      sx={{
        minWidth: 0,
        px:
          empty(startIcon) && empty(endIcon) ? '7px !important' : empty(children) ? '5px !important' : '7px !important',
        ...initSx,
      }}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...props}
    >
      {children}
    </PButton>
  );
};
export default PTableButton;
