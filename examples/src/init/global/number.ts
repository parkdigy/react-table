declare global {
  function numberWithThousandSeparator(v: string|number): string;
}

globalThis.numberWithThousandSeparator = (v: string|number): string => {
  return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export {};
