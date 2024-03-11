const ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

const nextTick = function (callback: () => void): void {
  setTimeout(callback);
};

export { ll, nextTick };

export * from './compare';
export * from './number';
export * from './table';
export * from './tel';
export * from './companyNo';
export * from './personalNo';
