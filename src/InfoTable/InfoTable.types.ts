import { ReactNode } from 'react';

export interface InfoTableInfo {
  [key: string]: any;
}

export interface InfoTableItem<T = InfoTableInfo> {
  label: ReactNode;
  name: keyof T;
  ellipsis?: boolean;
}

export type InfoTableItems<T = InfoTableInfo> = InfoTableItem<T>[];

export interface InfoTableProps<T = InfoTableInfo> {
  labelXs: number;
  valueXs: number;
  info: T;
  items: InfoTableItems<T>;
}

export const InfoTableDefaultProps = {};
