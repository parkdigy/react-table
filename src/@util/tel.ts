export function getTelAutoDash(tel: string | null | undefined): string | null {
  if (tel == null) return null;

  const str = tel.replace(/[^0-9*]/g, '');
  const isLastDash = tel.substr(tel.length - 1, 1) === '-';

  if (str.substr(0, 1) !== '0' && !['15', '16', '18'].includes(str.substr(0, 2))) {
    return tel;
  }

  let tmp = '';
  let preLen;

  switch (str.substr(0, 2)) {
    case '02':
      preLen = 2;
      break;
    case '15':
    case '16':
    case '18':
      preLen = 4;
      break;
    default:
      preLen = 3;
  }

  if (['15', '16', '18'].includes(str.substr(0, 2))) {
    if (str.length <= preLen) {
      tmp = str;
    } else if (str.length <= preLen + 4) {
      tmp += str.substr(0, preLen);
      tmp += '-';
      tmp += str.substr(preLen);
    } else {
      tmp = str;
    }
  } else if (str.length <= preLen) {
    tmp = str;
  } else if (str.length <= preLen + 3) {
    tmp += str.substr(0, preLen);
    tmp += '-';
    tmp += str.substr(preLen);
  } else if (str.length <= preLen + 7) {
    tmp += str.substr(0, preLen);
    tmp += '-';
    tmp += str.substr(preLen, 3);
    tmp += '-';
    tmp += str.substr(preLen + 3);
  } else if (str.length <= preLen + 8) {
    tmp += str.substr(0, preLen);
    tmp += '-';
    tmp += str.substr(preLen, 4);
    tmp += '-';
    tmp += str.substr(preLen + 4);
  } else {
    tmp = str;
  }

  if (isLastDash) {
    if (str.length === preLen) {
      tmp += '-';
    }
  }

  return tmp;
}
