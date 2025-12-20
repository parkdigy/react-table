import React from 'react';
import { PTableBodyRowProps as Props } from './PTableBodyRow.types';
import { PTableItem } from '../PTable';
export declare const PStyledBodyRow: import("@emotion/styled").StyledComponent<import("@mui/material").TableRowOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "className" | "style" | "classes" | "children" | "hover" | "selected" | "sx"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
declare function PTableBodyRow<T extends PTableItem = PTableItem>({ className, style, id, index, defaultAlign, defaultEllipsis, sortable, columns, item, onClick, onCheckChange, onGetColumnClassName, onGetColumnStyle, onGetColumnSx, ...props }: Props<T>): React.JSX.Element;
export default PTableBodyRow;
