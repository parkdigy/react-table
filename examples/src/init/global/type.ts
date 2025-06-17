declare global {
  var isEnvDevelopment: boolean;
  var isEnvProduction: boolean;
}

globalThis.isEnvDevelopment = (window as any).$$AppConfig.env === 'development';
globalThis.isEnvProduction = (window as any).$$AppConfig.env === 'production';

export {};
