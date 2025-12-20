import React from 'react';
import { PTableSortableBodyProps as Props } from './PTableSortableBody.types';
import { PTableItem } from '../PTable';
declare function PTableSortableBody<T extends PTableItem = PTableItem>({ items, columns, showOddColor, showEvenColor, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyRowClassName, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, defaultAlign, defaultEllipsis, sortable, onClick, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableSortableBody;
