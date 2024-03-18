import { ReactNode } from 'react';
import { BoxProps, GridProps, IconButtonProps, TypographyProps } from '@mui/material';
import { CommonSxProps } from '../@types';
export interface InfoTableInfo {
    [key: string]: any;
}
export type InfoTableItemType = 'text' | 'number' | 'tel' | 'url' | 'email' | 'date' | 'datetime' | 'date-hour' | 'date-minute' | 'company_no' | 'personal_no' | 'divider';
export interface InfoTableItem<T = InfoTableInfo> {
    icon?: string;
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
    style?: CommonSxProps['style'];
    sx?: BoxProps['sx'];
    labelClassName?: string;
    labelColor?: TypographyProps['color'];
    labelStyle?: CommonSxProps['style'];
    labelSx?: BoxProps['sx'];
    valueClassName?: string;
    valueStyle?: CommonSxProps['style'];
    valueSx?: CommonSxProps['sx'];
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
}
export type InfoTableItems<T = InfoTableInfo> = (InfoTableItem<T> | false | undefined | null)[];
export type InfoTableCols = 1 | 2 | 3 | 4 | 6 | 12;
export interface InfoTableProps<T = InfoTableInfo> {
    cols: InfoTableCols | {
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
    style?: CommonSxProps['style'];
    sx?: CommonSxProps['sx'];
    labelClassName?: string;
    labelColor?: TypographyProps['color'];
    labelStyle?: CommonSxProps['style'];
    labelSx?: BoxProps['sx'];
    dividerColor?: TypographyProps['color'];
    valueClassName?: string;
    valueStyle?: CommonSxProps['style'];
    valueSx?: CommonSxProps['sx'];
    ellipsis?: boolean;
    valueUnderline?: boolean;
    info: T;
    items: InfoTableItems<T>;
    onCopyToClipboard?(item: InfoTableItem<T>, text: string): void;
}
export declare const InfoTableDefaultProps: Pick<InfoTableProps, 'spacing' | 'columnSpacing' | 'rowSpacing' | 'labelColor' | 'dividerColor'>;
