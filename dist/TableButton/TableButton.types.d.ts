import { ButtonProps } from '@mui/material';
export interface TableButtonProps extends Omit<ButtonProps, 'size' | 'startIcon' | 'endIcon'> {
    icon?: string;
    startIcon?: string;
    endIcon?: string;
}
export declare const TableButtonDefaultProps: Pick<TableButtonProps, 'variant' | 'color'>;
