import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
export interface CommonProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface CommonSxProps extends CommonProps {
    sx?: SxProps<Theme>;
}
