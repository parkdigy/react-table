import React from 'react';
import { PInfoTableProps as Props, PInfoTableInfo } from './PInfoTable.types';
declare function PInfoTable<T extends PInfoTableInfo = PInfoTableInfo>({ cols, spacing, columnSpacing, rowSpacing, className, style, sx, labelClassName, labelColor, labelStyle, labelSx, dividerColor, valueClassName, valueStyle, valueSx, ellipsis, valueUnderline, info, items, onCopyToClipboard, }: Props<T>): React.JSX.Element;
export default PInfoTable;
