import React, { CSSProperties, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
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
  FormCheckValueItemCommands,
  FormDateRangePickerCommands,
  FormDateValueItemCommands,
  FormHidden,
  FormValue,
  FormValueMap,
  Search,
  SearchCommands,
  SearchGroup,
} from '@pdg/react-form';
import { Table, TableCommands, TableItem } from '../Table';
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

interface WithForwardRefType<T = TableItem> extends React.FC<SearchTableProps<T>> {
  <T = TableItem>(props: SearchTableProps<T> & React.RefAttributes<SearchTableCommands<T>>): ReturnType<
    React.FC<SearchTableProps<T>>
  >;
}

const SearchTable: WithForwardRefType = React.forwardRef<SearchTableCommands, SearchTableProps>(
  (
    {
      color,
      hash,
      stickyHeader,
      fullHeight,
      search,
      table,
      betweenSearchTableComponent,
      onGetData,
      onRequestHashChange,
      // ---------------------------------------------------------------------------------------------------------------
      className,
      style: initStyle,
      sx,
    },
    ref
  ) => {
    const searchRef = useRef<SearchCommands>();
    const tableRef = useRef<TableCommands>();

    //------------------------------------------------------------------------------------------------------------------

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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // Function ----------------------------------------------------------------------------------------------------------

    const deHash = useCallback((): HashValueMap => {
      const values: HashValueMap = {};
      const hash = window.location.hash.substring(1);
      hash.replace(/([^=&]+)=([^&]*)/g, (substring, key, value) => {
        values[decodeURIComponent(key)] = decodeURIComponent(value);
        return substring;
      });
      return values;
    }, []);

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
                case 'FormCheckbox':
                  if (notEmpty(value)) {
                    const checkCommands = itemCommands as FormCheckValueItemCommands;
                    if (value.toString() === itemCommands.getValue()?.toString()) {
                      checkCommands.setChecked(true);
                    } else if (value.toString() === checkCommands.getUncheckedValue()?.toString()) {
                      checkCommands.setChecked(false);
                    }
                  }
                  break;
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

    // Commands --------------------------------------------------------------------------------------------------------

    useLayoutEffect(() => {
      if (ref) {
        const commands: SearchTableCommands = {
          reload: (page?: number) => {
            if (page != null) {
              tableRef.current?.scrollToTop();
            }

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
    }, [ref, hash, lastGetDataDataRef, searchRef, tableRef, getData, hashToSearchValue]);

    //--------------------------------------------------------------------------------------------------------------------

    useEffect(() => {
      if (hash) {
        const data = hashToSearchValue();
        if (data) getData(data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);

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
        tableRef.current?.scrollToTop();

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

    // Memo --------------------------------------------------------------------------------------------------------------

    const style = useMemo((): CSSProperties | undefined => {
      if (fullHeight) {
        return { ...initStyle, flex: 1, display: 'flex' };
      } else {
        return initStyle;
      }
    }, [initStyle, fullHeight]);

    const tableContainerStyle = useMemo((): CSSProperties | undefined => {
      if (fullHeight) {
        return { flex: 1, display: 'flex', flexDirection: 'column' };
      }
    }, [fullHeight]);

    //------------------------------------------------------------------------------------------------------------------

    return (
      <Grid
        container
        direction='column'
        spacing={1}
        className={classNames('SearchTable', className)}
        style={style}
        sx={sx}
      >
        <Grid item sx={{ display: searchInfo.searchGroups ? undefined : 'none' }}>
          <Search
            color={color}
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
        {betweenSearchTableComponent && <Grid item>{betweenSearchTableComponent}</Grid>}
        <Grid item style={tableContainerStyle}>
          <Table
            {...tableInfo.props}
            stickyHeader={stickyHeader || tableInfo.props?.stickyHeader}
            fullHeight={fullHeight || tableInfo.props?.fullHeight}
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
