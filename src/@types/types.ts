import { type CSSProperties, type ReactNode } from 'react';
import { type SxProps } from '@mui/system';
import { type Theme } from '@mui/material/styles';

export interface PTableCommonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface PTableCommonSxProps extends PTableCommonProps {
  sx?: SxProps<Theme>;
}
