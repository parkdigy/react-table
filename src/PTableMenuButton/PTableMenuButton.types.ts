import { ReactElement } from 'react';
import { PButtonProps } from '@pdg/react-component';
import { PopperPlacementType, MenuListProps } from '@mui/material';

export interface PTableMenuButtonProps extends Omit<PButtonProps, 'size' | 'onClick'> {
  placement?: PopperPlacementType;
  inModal?: boolean;
  zIndex?: number;
  menuList: ReactElement<MenuListProps>;
}
