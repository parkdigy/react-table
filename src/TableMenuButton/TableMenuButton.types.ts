import { ButtonProps } from '@mui/material';
import { ReactElement } from 'react';
import { PopperPlacementType } from '@mui/base/Popper/Popper.types';
import { PdgIconProps } from '@pdg/react-component';

export interface TableMenuButtonProps extends Omit<ButtonProps, 'size' | 'startIcon' | 'endIcon' | 'onClick'> {
  icon?: PdgIconProps['children'];
  startIcon?: PdgIconProps['children'];
  endIcon?: PdgIconProps['children'];
  placement?: PopperPlacementType;
  inModal?: boolean;
  zIndex?: number;
  menuList: ReactElement;
}

export const TableMenuButtonDefaultProps: Pick<TableMenuButtonProps, 'variant' | 'color' | 'placement'> = {
  variant: 'text',
  color: 'primary',
  placement: 'bottom',
};
