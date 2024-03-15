import { ButtonProps } from '@mui/material';
import { ReactElement } from 'react';
import { PopperPlacementType } from '@mui/base/Popper/Popper.types';
export interface TableMenuButtonProps extends Omit<ButtonProps, 'size' | 'startIcon' | 'endIcon' | 'onClick'> {
    icon?: string;
    startIcon?: string;
    endIcon?: string;
    placement?: PopperPlacementType;
    inModal?: boolean;
    zIndex?: number;
    menuList: ReactElement;
}
export declare const TableMenuButtonDefaultProps: Pick<TableMenuButtonProps, 'variant' | 'color' | 'placement'>;
