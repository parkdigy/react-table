import { PdgButtonProps } from '@pdg/react-component';
export interface TableButtonProps extends Omit<PdgButtonProps, 'size'> {
}
export declare const TableButtonDefaultProps: Pick<TableButtonProps, 'variant' | 'color'>;
