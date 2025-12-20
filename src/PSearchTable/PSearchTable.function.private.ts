import { PSearchTableSearchInfo, PSearchTableProps, PSearchTableTableInfo } from './PSearchTable.types';
import { Dict } from '@pdg/types';
import { PTableItem } from '../PTable';

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

export const getTableInfo = <T extends PTableItem = PTableItem>(
  table: PSearchTableProps<T>['table']
): PSearchTableTableInfo<T> => {
  if (table) {
    const { ref, ...props } = table;
    return { ref, props };
  } else {
    return {};
  }
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
