import React from 'react';
import { PTableProps as Props, PTableItem } from './PTable.types';
declare function PTable<T extends PTableItem = PTableItem>({ ref, className, style: initStyle, sx, caption, topHeadRows, columns: initColumns, items: initItems, paging: initPaging, pagingAlign, defaultAlign, defaultEllipsis, stickyHeader: initStickyHeader, height, minHeight, maxHeight, fullHeight, showOddColor, showEvenColor, cellPadding, footer, noData, pagination, sortable, progressiveVisible, onClick, onGetBodyRowClassName, onGetBodyRowStyle, onGetBodyRowSx, onGetBodyColumnClassName, onGetBodyColumnStyle, onGetBodyColumnSx, onPageChange, onSortChange, onCheckChange, }: Props<T>): React.JSX.Element | null;
export default PTable;
