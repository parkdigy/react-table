import { ReactNode } from 'react';
import { BoxProps, GridProps, IconButtonProps, TypographyProps } from '@mui/material';
import { PTableCommonSxProps } from '../@types';
import { PIconProps } from '@pdg/react-component';

export interface PInfoTableInfo {
  [key: string]: any;
}

export type PInfoTableItemType =
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

export interface PInfoTableItem<T extends PInfoTableInfo = PInfoTableInfo> {
  icon?: PIconProps['children'];
  label?: ReactNode;
  name?: keyof T;
  type?: PInfoTableItemType;
  ellipsis?: boolean;
  className?: string;
  dateFormat?: string;
  dateTwoLine?: boolean;
  numberPrefix?: string;
  numberSuffix?: string;
  dividerColor?: TypographyProps['color'];
  dividerLine?: boolean;
  style?: PTableCommonSxProps['style'];
  sx?: BoxProps['sx'];
  labelClassName?: string;
  labelColor?: TypographyProps['color'];
  labelStyle?: PTableCommonSxProps['style'];
  labelSx?: BoxProps['sx'];
  valueClassName?: string;
  valueStyle?: PTableCommonSxProps['style'];
  valueSx?: PTableCommonSxProps['sx'];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  clipboard?: boolean;
  clipboardIcon?: string;
  clipboardText?: string;
  clipboardProps?: Omit<IconButtonProps, 'children'>;
  onRender?: (info: T) => ReactNode;
  onRenderEmpty?: (info: T) => ReactNode;
  onHide?: (info: T) => boolean;
  onXs?: (info: T) => number;
  onSm?: (info: T) => number;
  onMd?: (info: T) => number;
  onLg?: (info: T) => number;
  onXl?: (info: T) => number;
}

export type PInfoTableItems<T extends PInfoTableInfo = PInfoTableInfo> = (
  | PInfoTableItem<T>
  | false
  | undefined
  | null
)[];

export type PInfoTableCols = 1 | 2 | 3 | 4 | 6 | 12;

export interface PInfoTableProps<T extends PInfoTableInfo = PInfoTableInfo> {
  cols:
    | PInfoTableCols
    | {
        xs?: PInfoTableCols;
        sm?: PInfoTableCols;
        md?: PInfoTableCols;
        lg?: PInfoTableCols;
        xl?: PInfoTableCols;
      };
  spacing?: GridProps['spacing'];
  columnSpacing?: GridProps['spacing'];
  rowSpacing?: GridProps['spacing'];
  className?: string;
  style?: PTableCommonSxProps['style'];
  sx?: PTableCommonSxProps['sx'];
  labelClassName?: string;
  labelColor?: TypographyProps['color'];
  labelStyle?: PTableCommonSxProps['style'];
  labelSx?: BoxProps['sx'];
  dividerColor?: TypographyProps['color'];
  valueClassName?: string;
  valueStyle?: PTableCommonSxProps['style'];
  valueSx?: PTableCommonSxProps['sx'];
  ellipsis?: boolean;
  valueUnderline?: boolean;
  info: T;
  items: PInfoTableItems<T>;
  onCopyToClipboard?: (item: PInfoTableItem<T>, text: string) => void;
}
