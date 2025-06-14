import { ReactNode } from 'react';
import { BoxProps, GridProps, IconButtonProps, TypographyProps } from '@mui/material';
import { TableCommonSxProps } from '../@types';
import { PdgIconProps } from '@pdg/react-component';

export interface InfoTableInfo {
  [key: string]: any;
}

export type InfoTableItemType =
  | 'text'
  | 'number'
  | 'tel'
  | 'url'
  | 'email'
  | 'date'
  | 'datetime'
  | 'date-hour'
  | 'date-minute'
  | 'business_no'
  | 'personal_no'
  | 'divider';

export interface InfoTableItem<T = InfoTableInfo> {
  icon?: PdgIconProps['children'];
  label?: ReactNode;
  name?: keyof T;
  type?: InfoTableItemType;
  ellipsis?: boolean;
  className?: string;
  dateFormat?: string;
  dateTwoLine?: boolean;
  numberPrefix?: string;
  numberSuffix?: string;
  dividerColor?: TypographyProps['color'];
  dividerLine?: boolean;
  style?: TableCommonSxProps['style'];
  sx?: BoxProps['sx'];
  labelClassName?: string;
  labelColor?: TypographyProps['color'];
  labelStyle?: TableCommonSxProps['style'];
  labelSx?: BoxProps['sx'];
  valueClassName?: string;
  valueStyle?: TableCommonSxProps['style'];
  valueSx?: TableCommonSxProps['sx'];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  clipboard?: boolean;
  clipboardIcon?: string;
  clipboardText?: string;
  clipboardProps?: Omit<IconButtonProps, 'children'>;
  onRender?(info: T): ReactNode;
  onRenderEmpty?(info: T): ReactNode;
  onHide?(info: T): boolean;
  onXs?(info: T): number;
  onSm?(info: T): number;
  onMd?(info: T): number;
  onLg?(info: T): number;
  onXl?(info: T): number;
}

export type InfoTableItems<T = InfoTableInfo> = (InfoTableItem<T> | false | undefined | null)[];

export type InfoTableCols = 1 | 2 | 3 | 4 | 6 | 12;

export interface InfoTableProps<T = InfoTableInfo> {
  cols:
    | InfoTableCols
    | {
        xs?: InfoTableCols;
        sm?: InfoTableCols;
        md?: InfoTableCols;
        lg?: InfoTableCols;
        xl?: InfoTableCols;
      };
  spacing?: GridProps['spacing'];
  columnSpacing?: GridProps['spacing'];
  rowSpacing?: GridProps['spacing'];
  className?: string;
  style?: TableCommonSxProps['style'];
  sx?: TableCommonSxProps['sx'];
  labelClassName?: string;
  labelColor?: TypographyProps['color'];
  labelStyle?: TableCommonSxProps['style'];
  labelSx?: BoxProps['sx'];
  dividerColor?: TypographyProps['color'];
  valueClassName?: string;
  valueStyle?: TableCommonSxProps['style'];
  valueSx?: TableCommonSxProps['sx'];
  ellipsis?: boolean;
  valueUnderline?: boolean;
  info: T;
  items: InfoTableItems<T>;
  onCopyToClipboard?(item: InfoTableItem<T>, text: string): void;
}
