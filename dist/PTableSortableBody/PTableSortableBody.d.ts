import React from 'react';
import { type PTableSortableBodyProps as Props } from './PTableSortableBody.types';
import { type PTableItem } from '../PTable';
declare function PTableSortableBody<T extends PTableItem = PTableItem>({ items, columns, showOddColor, showEvenColor, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyRowClassName, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, defaultAlign, defaultEllipsis, sortable, onClick, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableSortableBody;
