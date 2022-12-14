import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import {
  SearchTableProps,
  SearchTableDefaultProps,
  SearchTableSearchProps,
  SearchTableCommands,
  SearchTableData,
  SearchTableTableProps,
} from './SearchTable.types';
import {
  FormDateRangePickerCommands,
  FormDateValueItemCommands,
  FormHidden,
  FormValue,
  FormValueMap,
  Search,
  SearchCommands,
  SearchGroup,
} from '@pdg/react-form';
import { Table, TableCommands } from '../Table';
import { equal, notEmpty } from '../@util';
import dayjs from 'dayjs';

interface HashValueMap {
  [key: string]: string;
}

interface SearchInfo {
  ref?: SearchTableSearchProps['ref'];
  searchGroups?: SearchTableSearchProps['searchGroups'];
  props?: Omit<SearchTableSearchProps, 'ref' | 'searchGroups'>;
}

interface TableInfo {
  ref?: SearchTableTableProps['ref'];
  props?: Omit<SearchTableTableProps, 'ref'>;
}

const SearchTable = React.forwardRef<SearchTableCommands, SearchTableProps>(
  ({ hash, search, table, onGetData, onRequestHashChange }, ref) => {
    const searchRef = useRef<SearchCommands>();
    const tableRef = useRef<TableCommands>();

    //--------------------------------------------------------------------------------------------------------------------

    const getSearchInfo = useCallback((search: SearchTableProps['search']) => {
      const searchInfo: SearchInfo = {};
      if (search) {
        const { ref, searchGroups, ...props } = search;
        searchInfo.ref = ref;
        searchInfo.searchGroups = searchGroups;
        searchInfo.props = props;
      }
      return searchInfo;
    }, []);

    const getTableInfo = useCallback((table: SearchTableProps['table']) => {
      const tableInfo: TableInfo = {};
      if (table) {
        const { ref, ...props } = table;
        tableInfo.ref = ref;
        tableInfo.props = props;
      }
      return tableInfo;
    }, []);

    // Ref -------------------------------------------------------------------------------------------------------------

    const lastGetDataDataRef = useRef<FormValueMap>({});

    // State -----------------------------------------------------------------------------------------------------------

    const [isFirstSearchSubmit, setIsFirstSearchSubmit] = useState(true);

    const [tableData, setTableData] = useState<SearchTableData>();

    // searchInfo ------------------------------------------------------------------------------------------------------

    const searchInfoFirstUseEffect = useRef(true);
    const [searchInfo, setSearchInfo] = useState<SearchInfo>(() => getSearchInfo(search));
    useEffect(() => {
      if (searchInfoFirstUseEffect.current) {
        searchInfoFirstUseEffect.current = false;
      } else {
        setSearchInfo(getSearchInfo(search));
      }
    }, [search]);

    // tableInfo -------------------------------------------------------------------------------------------------------

    const tableInfoFirstUseEffect = useRef(true);
    const [tableInfo, setTableInfo] = useState<TableInfo>(() => getTableInfo(table));
    useEffect(() => {
      if (tableInfoFirstUseEffect.current) {
        tableInfoFirstUseEffect.current = false;
      } else {
        setTableInfo(getTableInfo(table));
      }
    }, [table]);

    // Function - getData ----------------------------------------------------------------------------------------------

    const getData = useCallback(
      (data: FormValueMap) => {
        lastGetDataDataRef.current = data;

        if (onGetData) {
          onGetData(data).then(setTableData);
        }
      },
      [onGetData]
    );

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        const commands: SearchTableCommands = {
          reload: (page?: number) => {
            let finalData: FormValueMap;
            if (lastGetDataDataRef.current) {
              finalData = { ...lastGetDataDataRef.current };
              if (page != null) {
                searchRef.current?.setValue('page', page);

                finalData.page = page;
              }
            } else {
              if (hash) {
                hashToSearchValue();
              }

              if (page != null) {
                searchRef.current?.setValue('page', page);
              }

              finalData = searchRef.current?.getAllFormValue() || {};
            }

            getData(finalData);
          },
          getLastLoadData: () => lastGetDataDataRef.current || {},
          getSearch: () => searchRef.current,
          getTable: () => tableRef.current,
        };

        if (typeof ref === 'function') {
          ref(commands);
        } else {
          ref.current = commands;
        }
      }
    }, [ref, hash, lastGetDataDataRef, searchRef, tableRef, getData]);

    //--------------------------------------------------------------------------------------------------------------------

    const deHash = useCallback((): HashValueMap => {
      const values: HashValueMap = {};
      const hash = window.location.hash.substring(1);
      hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
        values[decodeURIComponent(key)] = decodeURIComponent(value);
        return substring;
      });
      return values;
    }, [window.location.hash]);

    const hashToSearchValue = useCallback((): FormValueMap | undefined => {
      const commands = searchRef.current;
      if (commands) {
        commands.resetAll();

        const hashValues = deHash();
        Object.keys(hashValues).forEach((name) => {
          const value: FormValue = hashValues[name];
          if (name === 'page') {
            commands.setValue(name, Number(value) || 1);
          } else {
            const itemCommands = commands.getItem(name);
            if (itemCommands) {
              switch (itemCommands.getType()) {
                case 'FormDatePicker':
                case 'FormDateTimePicker':
                case 'FormTimePicker':
                  {
                    if (notEmpty(value)) {
                      const dateCommands = itemCommands as FormDateValueItemCommands;
                      const format = dateCommands.getFormValueFormat();
                      const itemValue = dayjs(value, format);
                      itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                    } else {
                      itemCommands.setValue(null);
                    }
                  }
                  break;
                case 'FormDateRangePicker':
                  {
                    const dateRangePickerCommands = itemCommands as FormDateRangePickerCommands;
                    const itemName = dateRangePickerCommands.getName();
                    const startNameSuffix = dateRangePickerCommands.getFormValueStartNameSuffix();
                    const endNameSuffix = dateRangePickerCommands.getFormValueEndNameSuffix();
                    const format = dateRangePickerCommands.getFormValueFormat();

                    if (name === `${itemName}${startNameSuffix}`) {
                      if (notEmpty(value)) {
                        const startValue = dayjs(value, format);
                        dateRangePickerCommands.setStartValue(startValue.isValid() ? startValue : null);
                      } else {
                        dateRangePickerCommands.setStartValue(null);
                      }
                    } else if (name === `${itemName}${endNameSuffix}`) {
                      if (notEmpty(value)) {
                        const endValue = dayjs(value, format);
                        dateRangePickerCommands.setEndValue(endValue.isValid() ? endValue : null);
                      } else {
                        dateRangePickerCommands.setEndValue(null);
                      }
                    }
                  }
                  break;
                default:
                  commands.setValue(name, value);
                  break;
              }
            }
          }
        });
        return commands.getAllFormValue();
      }
    }, [searchRef, deHash]);

    //------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (hash) {
        const data = hashToSearchValue();
        if (data) getData(data);
      }
    }, [hash, window.location.hash, getData]);

    //--------------------------------------------------------------------------------------------------------------------

    const hashChange = useCallback(
      (params: FormValueMap) => {
        if (onRequestHashChange) {
          const hashes: string[] = [];
          Object.keys(params).forEach((name) => {
            const value = params[name];
            if (name === 'page') {
              if (Number(value) > 1) {
                hashes.push(`${name}=${value}`);
              }
            } else {
              if (searchRef.current) {
                const itemCommands = searchRef.current.getItem(name);

                if (itemCommands) {
                  let resetValue: FormValue | null = null;

                  switch (itemCommands.getType()) {
                    case 'FormDateRangePicker':
                      {
                        const itemName = itemCommands.getName();
                        const startSuffix = (itemCommands as FormDateRangePickerCommands).getFormValueStartNameSuffix();
                        const endSuffix = (itemCommands as FormDateRangePickerCommands).getFormValueEndNameSuffix();

                        if (name === `${itemName}${startSuffix}`) {
                          resetValue = searchRef.current.getFormReset(itemName, startSuffix);
                        } else if (name === `${itemName}${endSuffix}`) {
                          resetValue = searchRef.current.getFormReset(itemName, endSuffix);
                        }
                      }
                      break;
                    default:
                      resetValue = searchRef.current.getFormReset(name);
                      break;
                  }

                  if (resetValue != null && !equal(resetValue, value)) {
                    hashes.push(`${name}=${encodeURIComponent(value)}`);
                  }
                }
              }
            }
          });
          const finalHash = hashes.join('&');
          if (window.location.hash.substring(1) === finalHash) {
            getData(params);
          } else {
            onRequestHashChange(hashes.join('&'));
          }
        }
      },
      [onRequestHashChange, getData]
    );

    //------------------------------------------------------------------------------------------------------------------

    const handlePageChange = useCallback(
      (page: number) => {
        searchRef.current?.setValue('page', page);

        let finalData: FormValueMap | undefined;
        if (lastGetDataDataRef.current) {
          finalData = { ...lastGetDataDataRef.current };
          finalData.page = page;
        } else {
          finalData = searchRef.current?.getAllFormValue();
        }

        if (hash) {
          hashChange(finalData || {});
        } else {
          getData(finalData || {});
        }
      },
      [searchRef, hash, hashChange, getData]
    );

    const handleSearchSubmit = useCallback(
      (data: FormValueMap) => {
        if (isFirstSearchSubmit) {
          setIsFirstSearchSubmit(false);
          if (!hash) {
            getData(data);
          }
        } else {
          searchRef.current?.setValue('page', 1);
          const finalData: FormValueMap = { ...data, page: 1 };
          if (hash) {
            hashChange(finalData);
          } else {
            getData(finalData);
          }
        }
      },
      [searchRef, hash, hashChange, getData, isFirstSearchSubmit]
    );

    //------------------------------------------------------------------------------------------------------------------

    return (
      <Grid container direction='column' spacing={1}>
        <Grid item sx={{ display: searchInfo.searchGroups ? undefined : 'none' }}>
          <Search
            {...searchInfo.props}
            ref={(commands: SearchCommands) => {
              if (searchInfo.ref) {
                if (typeof searchInfo.ref === 'function') {
                  searchInfo.ref(commands);
                } else {
                  searchInfo.ref.current = commands;
                }
              }
              searchRef.current = commands || undefined;
            }}
            autoSubmit
            onSubmit={handleSearchSubmit}
          >
            <SearchGroup hidden>
              <FormHidden name='page' value={1} />
            </SearchGroup>
            {searchInfo.searchGroups}
          </Search>
        </Grid>
        <Grid item>
          <Table
            {...tableInfo.props}
            ref={(commands: TableCommands) => {
              if (tableInfo.ref) {
                if (typeof tableInfo.ref === 'function') {
                  tableInfo.ref(commands);
                } else {
                  tableInfo.ref.current = commands;
                }
              }
              tableRef.current = commands || undefined;
            }}
            items={tableData?.items}
            paging={tableData?.paging}
            onPageChange={handlePageChange}
          />
        </Grid>
      </Grid>
    );
  }
);

SearchTable.displayName = 'SearchTable';
SearchTable.defaultProps = SearchTableDefaultProps;

export default SearchTable;
