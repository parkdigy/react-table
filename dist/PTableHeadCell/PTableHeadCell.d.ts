import React from 'react';
import { type PTableHeadCellProps as Props } from './PTableHeadCell.types';
import { type PTableItem } from '../PTable';
declare function PTableHeadCell<T extends PTableItem = PTableItem>({ column, items, defaultAlign, top, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableHeadCell;
