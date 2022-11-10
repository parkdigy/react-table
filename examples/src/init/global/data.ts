import { ReactNode } from 'react';

declare global {
  function lv<T>(label: ReactNode, value: any, other?: object): T;
}

globalThis.lv = <T>(label: ReactNode, value: any, other?: object) => {
  return { label, value, ...other } as T;
};

export {};
