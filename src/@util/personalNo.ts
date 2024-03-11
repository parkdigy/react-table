/********************************************************************************************************************
 * 주민등록번호에 하이픈 추가하는 함수
 * @param personalNo 주민등록번호
 * @returns 하이픈 추가된 주민등록번호
 * ******************************************************************************************************************/
export function personalNoAutoDash(personalNo: string): string {
  const str = personalNo.replace(/[^0-9]/g, '');
  const values: string[] = [str.slice(0, 6)];
  if (str.length > 6) values.push(str.slice(6));
  return values.join('-');
}
