import React from 'react';
import { PTableBodyCellProps as Props } from './PTableBodyCell.types';
import { PTableItem } from '../PTable/PTable.types';
declare function PTableBodyCell<T extends PTableItem = PTableItem>({ ref, className, style, sx, item, index, column, defaultAlign, defaultEllipsis, onClick, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableBodyCell;
