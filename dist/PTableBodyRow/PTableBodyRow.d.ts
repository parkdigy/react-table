import React from 'react';
import { type PTableBodyRowProps as Props } from './PTableBodyRow.types';
import { type PTableItem } from '../PTable';
declare function PTableBodyRow<T extends PTableItem = PTableItem>({ className, style: initStyle, id, index, defaultAlign, defaultEllipsis, sortable, columns, item, onClick, onCheckChange, onGetColumnClassName, onGetColumnStyle, onGetColumnSx, ...props }: Props<T>): React.JSX.Element;
export default PTableBodyRow;
