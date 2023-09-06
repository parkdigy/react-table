/// <reference types="react" />
export declare const TableTopHeadCaptionRow: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").TableRowClasses> | undefined;
    hover?: boolean | undefined;
    selected?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "key" | keyof import("react").HTMLAttributes<HTMLTableRowElement>> & {
    ref?: ((instance: HTMLTableRowElement | null) => void) | import("react").RefObject<HTMLTableRowElement> | null | undefined;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "children" | "hover" | "selected" | "sx"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
