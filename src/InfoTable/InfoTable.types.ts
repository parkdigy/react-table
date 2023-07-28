import { ReactNode } from 'react';
import { BoxProps, GridProps, TypographyProps } from '@mui/material';
import { CommonSxProps } from '../@types';

export interface InfoTableInfo {
  [key: string]: any;
}

export interface InfoTableItem<T = InfoTableInfo> {
  label: ReactNode;
  name: keyof T;
  ellipsis?: boolean;
  labelClassName?: string;
  labelColor?: TypographyProps['color'];
  labelStyle?: CommonSxProps['style'];
  labelSx?: BoxProps['sx'];
  valueClassName?: string;
  valueStyle?: CommonSxProps['style'];
  valueSx?: CommonSxProps['sx'];
  xs?: number;
  onRender?(info: T): ReactNode;
}

export type InfoTableItems<T = InfoTableInfo> = InfoTableItem<T>[];

export interface InfoTableProps<T = InfoTableInfo> {
  cols: 1 | 2 | 3 | 4 | 6 | 12;
  spacing?: GridProps['spacing'];
  className?: string;
  style?: CommonSxProps['style'];
  sx?: CommonSxProps['sx'];
  labelClassName?: string;
  labelColor?: TypographyProps['color'];
  labelStyle?: CommonSxProps['style'];
  labelSx?: BoxProps['sx'];
  info: T;
  items: InfoTableItems<T>;
}

export const InfoTableDefaultProps: Pick<InfoTableProps, 'spacing' | 'labelColor'> = {
  spacing: 1,
  labelColor: 'primary',
};
