import React from 'react';
import { TableBodyRowProps as Props } from './TableBodyRow.types';
export declare const StyledBodyRow: import("@emotion/styled").StyledComponent<{
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").TableRowClasses> | undefined;
    hover?: boolean | undefined;
    selected?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "key" | keyof React.HTMLAttributes<HTMLTableRowElement>> & {
    ref?: ((instance: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "hover" | "selected" | "sx"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
declare const TableBodyRow: React.FC<Props>;
export default TableBodyRow;
