import { ButtonProps } from '@mui/material';
import { PdgIconProps } from '@pdg/react-component';
export interface TableButtonProps extends Omit<ButtonProps, 'size' | 'startIcon' | 'endIcon'> {
    icon?: PdgIconProps['children'];
    startIcon?: PdgIconProps['children'];
    endIcon?: PdgIconProps['children'];
}
export declare const TableButtonDefaultProps: Pick<TableButtonProps, 'variant' | 'color'>;
