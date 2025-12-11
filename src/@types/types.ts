import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export interface PTableCommonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface PTableCommonSxProps extends PTableCommonProps {
  sx?: SxProps<Theme>;
}
