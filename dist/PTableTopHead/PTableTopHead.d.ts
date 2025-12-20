import React from 'react';
import { PTableTopHeadProps as Props } from './PTableTopHead.types';
import { PTableItem } from '../PTable';
declare function PTableTopHead<T extends PTableItem = PTableItem>({ columns, items, rows, caption, defaultAlign, onCheckChange, }: Props<T>): React.JSX.Element;
export default PTableTopHead;
