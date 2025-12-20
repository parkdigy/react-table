import React from 'react';
import { PTableCommonCellProps as Props } from './PTableCommonCell.types';
import { PTableItem } from '../PTable';
declare function PTableCommonCell<T extends PTableItem = PTableItem>({ ref, children, className: initClassName, style: initStyle, sx: initSx, type, column, defaultAlign, defaultEllipsis: initDefaultEllipsis, index, item, onClick, }: Props<T>): React.JSX.Element;
export default PTableCommonCell;
