import { TableColumn } from '../Table/Table.types';
import { CommonSxProps } from '../@types';
import { TypographyProps } from '@mui/material';
export declare function getTableColumnAlign(column: TableColumn, defaultAlign: TableColumn['align']): TableColumn['align'];
export declare function combineSx(...sx: (boolean | CommonSxProps['sx'])[]): CommonSxProps['sx'];
export declare function typographyColorToSxColor(color: TypographyProps['color']): string | readonly (readonly string[] | import("csstype").Property.Color | null | undefined)[] | {
    [key: string]: readonly string[] | import("csstype").Property.Color | null | undefined;
} | ((theme: import("@mui/material").Theme) => import("@mui/system/styleFunctionSx").ResponsiveStyleValue<readonly string[] | import("csstype").Property.Color | undefined>) | undefined;
