import { type ReactElement } from 'react';
import { type PButtonProps } from '@pdg/react-component';
import { type PopperPlacementType, type MenuListProps } from '@mui/material';
export interface PTableMenuButtonProps extends Omit<PButtonProps, 'size' | 'onClick'> {
    placement?: PopperPlacementType;
    inModal?: boolean;
    zIndex?: number;
    menuList: ReactElement<MenuListProps>;
}
