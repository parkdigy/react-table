/********************************************************************************************************************
 * 사업자등록번호 하이픈 추가
 * @param companyNo 사업자등록번호
 * @returns 하이픈이 추가된 사업자등록번호
 * ******************************************************************************************************************/
export function companyNoAutoDash(companyNo: string): string {
  const str = companyNo.replace(/[^0-9*]/g, '');
  const values: string[] = [str.slice(0, 3)];
  if (str.length > 3) values.push(str.slice(3, 5));
  if (str.length > 5) values.push(str.slice(5));
  return values.join('-');
}
