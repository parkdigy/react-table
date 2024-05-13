import { CSSProperties, ReactNode } from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

export interface TableCommonProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface TableCommonSxProps extends TableCommonProps {
  sx?: SxProps<Theme>;
}
