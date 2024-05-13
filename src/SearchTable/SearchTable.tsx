import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Grid } from '@mui/material';
import { SearchTableProps, SearchTableCommands, SearchTableData, SearchInfo, TableInfo } from './SearchTable.types';
import {
  FormCheckValueItemCommands,
  FormDateRangePickerCommands,
  FormDateValueItemCommands,
  FormHidden,
  FormMonthPickerCommands,
  FormMonthRangePickerCommands,
  FormRangeValueItemNameCommands,
  FormValue,
  FormValueMap,
  FormYearRangePickerCommands,
  Search,
  SearchCommands,
  SearchGroup,
} from '@pdg/react-form';
import { Table, TableCommands, TableItem } from '../Table';
import dayjs from 'dayjs';
import { equal, notEmpty } from '@pdg/util';
import { deHash, getSearchInfo, getTableInfo } from './SearchTable.function.private';

interface WithForwardRefType<T = TableItem> extends React.FC<SearchTableProps<T>> {
  <T = TableItem>(
    props: SearchTableProps<T> & React.RefAttributes<SearchTableCommands<T>>
  ): ReturnType<React.FC<SearchTableProps<T>>>;
}

const SearchTable: WithForwardRefType = React.forwardRef<SearchTableCommands, SearchTableProps>(
  (
    {
      className,
      style: initStyle,
      sx,
      color,
      hash,
      stickyHeader,
      fullHeight,
      search,
      table,
      betweenSearchTableComponent,
      onGetData,
      onRequestHashChange,
    },
    ref
  ) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/

    const searchRef = useRef<SearchCommands>();
    const tableRef = useRef<TableCommands>();
    const lastGetDataDataRef = useRef<FormValueMap>({});

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isFirstSearchSubmit, setIsFirstSearchSubmit] = useState(true);
    const [tableData, setTableData] = useState<SearchTableData>();

    /********************************************************************************************************************
     * searchInfo
     * ******************************************************************************************************************/

    const searchInfoFirstUseEffect = useRef(true);
    const [searchInfo, setSearchInfo] = useState<SearchInfo>(() => getSearchInfo(search));
    useEffect(() => {
      if (searchInfoFirstUseEffect.current) {
        searchInfoFirstUseEffect.current = false;
      } else {
        setSearchInfo(getSearchInfo(search));
      }
    }, [search]);

    /********************************************************************************************************************
     * tableInfo
     * ******************************************************************************************************************/

    const tableInfoFirstUseEffect = useRef(true);
    const [tableInfo, setTableInfo] = useState<TableInfo>(() => getTableInfo(table));
    useEffect(() => {
      if (tableInfoFirstUseEffect.current) {
        tableInfoFirstUseEffect.current = false;
      } else {
        setTableInfo(getTableInfo(table));
      }
    }, [table]);

    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/

    const getData = useCallback(
      (data: FormValueMap) => {
        lastGetDataDataRef.current = data;

        if (onGetData) {
          onGetData(data).then(setTableData);
        }
      },
      [onGetData]
    );

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
                    const checkCommands = itemCommands as FormCheckValueItemCommands<any>;
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
                    const fromName = dateRangePickerCommands.getFormValueFromName();
                    const toName = dateRangePickerCommands.getFormValueToName();
                    const format = dateRangePickerCommands.getFormValueFormat();

                    if (name === fromName) {
                      if (notEmpty(value)) {
                        const startValue = dayjs(value, format);
                        dateRangePickerCommands.setFromValue(startValue.isValid() ? startValue : null);
                      } else {
                        dateRangePickerCommands.setFromValue(null);
                      }
                    } else if (name === toName) {
                      if (notEmpty(value)) {
                        const endValue = dayjs(value, format);
                        dateRangePickerCommands.setToValue(endValue.isValid() ? endValue : null);
                      } else {
                        dateRangePickerCommands.setToValue(null);
                      }
                    }
                  }
                  break;
                case 'FormYearRangePicker':
                  {
                    const dateRangePickerCommands = itemCommands as FormYearRangePickerCommands;
                    const fromName = dateRangePickerCommands.getFormValueFromName();
                    const toName = dateRangePickerCommands.getFormValueToName();

                    if (name === fromName) {
                      dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                    } else if (name === toName) {
                      dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                    }
                  }
                  break;
                case 'FormMonthPicker':
                  {
                    const monthCommands = itemCommands as FormMonthPickerCommands;
                    const yearName = monthCommands.getFormValueYearName();
                    const monthName = monthCommands.getFormValueMonthName();

                    if (name === yearName) {
                      monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                    } else if (name === monthName) {
                      monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                    }
                  }
                  break;
                case 'FormMonthRangePicker':
                  {
                    const monthRangeCommands = itemCommands as FormMonthRangePickerCommands;
                    const fromYearName = monthRangeCommands.getFormValueFromYearName();
                    const fromMonthName = monthRangeCommands.getFormValueFromMonthName();
                    const toYearName = monthRangeCommands.getFormValueToYearName();
                    const toMonthName = monthRangeCommands.getFormValueToMonthName();

                    if (name === fromYearName) {
                      monthRangeCommands.setFromYear(notEmpty(value) ? Number(value) : null);
                    } else if (name === fromMonthName) {
                      monthRangeCommands.setFromMonth(notEmpty(value) ? Number(value) : null);
                    } else if (name === toYearName) {
                      monthRangeCommands.setToYear(notEmpty(value) ? Number(value) : null);
                    } else if (name === toMonthName) {
                      monthRangeCommands.setToMonth(notEmpty(value) ? Number(value) : null);
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
    }, [searchRef]);

    /********************************************************************************************************************
     * Commands
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * hash
     * ******************************************************************************************************************/

    useEffect(() => {
      if (hash) {
        const data = hashToSearchValue();
        if (data) getData(data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);

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
                    case 'FormYearRangePicker':
                      {
                        const commands = itemCommands as FormRangeValueItemNameCommands;
                        const itemName = itemCommands.getName();
                        const fromName = commands.getFormValueFromName();
                        const fromSuffix = commands.getFormValueFromNameSuffix();
                        const toName = commands.getFormValueToName();
                        const toSuffix = commands.getFormValueToNameSuffix();

                        if (name === fromName) {
                          resetValue = searchRef.current.getFormReset(itemName, fromSuffix);
                        } else if (name === toName) {
                          resetValue = searchRef.current.getFormReset(itemName, toSuffix);
                        }
                      }
                      break;
                    case 'FormMonthPicker':
                      {
                        const commands = itemCommands as FormMonthPickerCommands;
                        const itemName = commands.getName();
                        const yearName = commands.getFormValueYearName();
                        const yearSuffix = commands.getFormValueYearNameSuffix();
                        const monthName = commands.getFormValueMonthName();
                        const monthSuffix = commands.getFormValueMonthNameSuffix();

                        if (name === yearName) {
                          resetValue = searchRef.current.getFormReset(itemName, yearSuffix);
                        } else if (name === monthName) {
                          resetValue = searchRef.current.getFormReset(itemName, monthSuffix);
                        }
                      }
                      break;
                    case 'FormMonthRangePicker':
                      {
                        const commands = itemCommands as FormMonthRangePickerCommands;
                        const itemName = commands.getName();
                        const fromYearName = commands.getFormValueFromYearName();
                        const fromYearSuffix = commands.getFormValueFromYearNameSuffix();
                        const fromMonthName = commands.getFormValueFromMonthName();
                        const fromMonthSuffix = commands.getFormValueFromMonthNameSuffix();
                        const toYearName = commands.getFormValueToYearName();
                        const toYearSuffix = commands.getFormValueToYearNameSuffix();
                        const toMonthName = commands.getFormValueToMonthName();
                        const toMonthSuffix = commands.getFormValueToMonthNameSuffix();

                        if (name === fromYearName) {
                          resetValue = searchRef.current.getFormReset(itemName, fromYearSuffix);
                        } else if (name === fromMonthName) {
                          resetValue = searchRef.current.getFormReset(itemName, fromMonthSuffix);
                        } else if (name === toYearName) {
                          resetValue = searchRef.current.getFormReset(itemName, toYearSuffix);
                        } else if (name === toMonthName) {
                          resetValue = searchRef.current.getFormReset(itemName, toMonthSuffix);
                        }
                      }
                      break;
                    default:
                      resetValue = searchRef.current.getFormReset(name);
                      break;
                  }

                  if (resetValue != null && !equal(resetValue, value) && typeof value !== 'object') {
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

    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/

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

    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/

    return (
      <Grid
        container
        direction='column'
        spacing={1}
        className={classNames('SearchTable', className)}
        style={fullHeight ? { ...initStyle, flex: 1, display: 'flex' } : initStyle}
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
        <Grid item style={fullHeight ? { flex: 1, display: 'flex', flexDirection: 'column' } : undefined}>
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

export default SearchTable;
