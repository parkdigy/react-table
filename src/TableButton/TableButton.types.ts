import { PdgButtonProps } from '@pdg/react-component';

export interface TableButtonProps extends Omit<PdgButtonProps, 'size'> {}

export const TableButtonDefaultProps: Pick<TableButtonProps, 'variant' | 'color'> = {
  variant: 'outlined',
  color: 'primary',
};
