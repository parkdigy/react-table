import React from 'react';
import { PTableSortableBodyBlockProps as Props } from './PTableSortableBodyBlock.types';
import { PTableItem } from '../PTable';
declare function PTableSortableBodyBlock<T extends PTableItem = PTableItem>({ items, baseIndex, columns, showOddColor, showEvenColor, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyRowClassName, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, defaultAlign, defaultEllipsis, sortable, onClick, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableSortableBodyBlock;
