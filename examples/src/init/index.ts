import _styled from 'styled-components';

/* eslint-disable no-var */
declare global {
  var env: {
    mode: 'development' | 'production';
    isDevelopment: boolean;
    isProduction: boolean;
    name: string;
  };

  function ll(message?: any, ...optionalParams: any[]): void;

  var styled: typeof _styled;
}
/* eslint-enable no-var */

const AppConfig = (window as any).__AppConfig__;

globalThis.env = {
  mode: AppConfig.env,
  isDevelopment: AppConfig.env === 'development',
  isProduction: AppConfig.env === 'production',
  name: AppConfig.name,
};

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

globalThis.styled = _styled;

export {};
