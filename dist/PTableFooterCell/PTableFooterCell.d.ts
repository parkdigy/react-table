import React from 'react';
import { PTableFooterCellProps as Props } from './PTableFooterCell.types';
import { PTableItem } from '../PTable';
declare function PTableFooterCell<T extends PTableItem = PTableItem>({ column, items, defaultAlign }: Props<T>): React.JSX.Element;
export default PTableFooterCell;
