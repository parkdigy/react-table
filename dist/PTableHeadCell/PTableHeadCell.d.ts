import React from 'react';
import { PTableHeadCellProps as Props } from './PTableHeadCell.types';
import { PTableItem } from '../PTable';
declare function PTableHeadCell<T extends PTableItem = PTableItem>({ column, items, defaultAlign, top, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableHeadCell;
