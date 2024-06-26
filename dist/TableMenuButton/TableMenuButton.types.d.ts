import { ReactElement } from 'react';
import { PopperPlacementType } from '@mui/base/Popper/Popper.types';
import { PdgButtonProps } from '@pdg/react-component';
export interface TableMenuButtonProps extends Omit<PdgButtonProps, 'size' | 'onClick'> {
    placement?: PopperPlacementType;
    inModal?: boolean;
    zIndex?: number;
    menuList: ReactElement;
}
