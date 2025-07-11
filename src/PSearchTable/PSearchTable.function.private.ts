import { PSearchTableSearchInfo, PSearchTableProps, PSearchTableTableInfo } from './PSearchTable.types';
import { Dict } from '@pdg/types';

export const getSearchInfo = (search: PSearchTableProps['search']) => {
  const searchInfo: PSearchTableSearchInfo = {};
  if (search) {
    const { ref, searchGroups, ...props } = search;
    searchInfo.ref = ref;
    searchInfo.searchGroups = searchGroups;
    searchInfo.props = props;
  }
  return searchInfo;
};

export const getTableInfo = (table: PSearchTableProps['table']) => {
  const tableInfo: PSearchTableTableInfo = {};
  if (table) {
    const { ref, ...props } = table;
    tableInfo.ref = ref;
    tableInfo.props = props;
  }
  return tableInfo;
};

export const deHash = () => {
  const values: Dict<string> = {};
  const hash = window.location.hash.substring(1);
  hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
    values[decodeURIComponent(key)] = decodeURIComponent(value);
    return substring;
  });
  return values;
};
