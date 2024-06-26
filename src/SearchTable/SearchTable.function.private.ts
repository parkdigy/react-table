import { SearchInfo, SearchTableProps, TableInfo } from './SearchTable.types';
import { Dict } from '@pdg/util';

export const getSearchInfo = (search: SearchTableProps['search']) => {
  const searchInfo: SearchInfo = {};
  if (search) {
    const { ref, searchGroups, ...props } = search;
    searchInfo.ref = ref;
    searchInfo.searchGroups = searchGroups;
    searchInfo.props = props;
  }
  return searchInfo;
};

export const getTableInfo = (table: SearchTableProps['table']) => {
  const tableInfo: TableInfo = {};
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
