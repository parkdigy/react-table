import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
export type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>>;
export type PartialOmit<T, K extends keyof T> = Partial<Omit<T, K>>;
export interface CommonProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface CommonSxProps extends CommonProps {
    sx?: SxProps<Theme>;
}
