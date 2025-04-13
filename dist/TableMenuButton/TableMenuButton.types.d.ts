import { ReactElement } from 'react';
import { PdgButtonProps } from '@pdg/react-component';
import { PopperPlacementType, MenuListProps } from '@mui/material';
export interface TableMenuButtonProps extends Omit<PdgButtonProps, 'size' | 'onClick'> {
    placement?: PopperPlacementType;
    inModal?: boolean;
    zIndex?: number;
    menuList: ReactElement<MenuListProps>;
}
