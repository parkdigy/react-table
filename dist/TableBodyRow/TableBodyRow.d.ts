import React from 'react';
import { TableBodyRowProps as Props } from './TableBodyRow.types';
export declare const StyledBodyRow: import("@emotion/styled").StyledComponent<import("@mui/material").TableRowOwnProps & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> & {
    ref?: ((instance: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null | undefined;
}, "className" | "style" | "classes" | "children" | "hover" | "selected" | "sx"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
declare const TableBodyRow: React.FC<Props>;
export default TableBodyRow;
