import { TableColumn } from '../Table/Table.types';
import { CommonSxProps } from '../@types';
import { TypographyProps } from '@mui/material';

export function getTableColumnAlign(column: TableColumn, defaultAlign: TableColumn['align']): TableColumn['align'] {
  switch (column.type) {
    case 'number':
      return column.align ? column.align : 'right';
    default:
      return column.align || defaultAlign;
  }
}

export function combineSx(...sx: (boolean | CommonSxProps['sx'])[]): CommonSxProps['sx'] {
  const finalSx: CommonSxProps['sx'] = [];
  if (Array.isArray(finalSx)) {
    sx.forEach((v) => v && finalSx.push(...(Array.isArray(v) ? v : [v])));
  }
  return finalSx;
}

export function typographyColorToSxColor(color: TypographyProps['color']) {
  if (typeof color === 'string') {
    if (['primary', 'secondary', 'info', 'warning', 'error'].includes(color)) {
      return `${color}.main`;
    } else if (color === 'text') {
      return 'text.primary';
    } else {
      return color;
    }
  } else {
    return color;
  }
}
