import React from 'react';
import { type PTableTopHeadProps as Props } from './PTableTopHead.types';
import { type PTableItem } from '../PTable';
declare function PTableTopHead<T extends PTableItem = PTableItem>({ columns, items, rows, caption, defaultAlign, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableTopHead;
