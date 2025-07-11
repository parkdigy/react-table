import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Grid } from '@mui/material';
import {
  PSearchTableProps,
  PSearchTableCommands,
  PSearchTableData,
  PSearchTableSearchInfo,
  PSearchTableTableInfo,
} from './PSearchTable.types';
import {
  PFormCheckValueItemCommands,
  PFormDateRangePickerCommands,
  PFormDateValueItemCommands,
  PFormHidden,
  PFormMonthPickerCommands,
  PFormMonthRangePickerCommands,
  PFormRangeValueItemNameCommands,
  PFormValue,
  PFormValueMap,
  PFormYearRangePickerCommands,
  PSearch,
  PSearchCommands,
  PSearchGroup,
} from '@pdg/react-form';
import { PTable, PTableCommands, PTableItem } from '../PTable';
import dayjs from 'dayjs';
import { equal, notEmpty } from '@pdg/compare';
import { deHash, getSearchInfo, getTableInfo } from './PSearchTable.function.private';
import { useForwardLayoutRef } from '@pdg/react-hook';

interface WithForwardRefType<T = PTableItem> extends React.FC<PSearchTableProps<T>> {
  <T = PTableItem>(
    props: PSearchTableProps<T> & React.RefAttributes<PSearchTableCommands<T>>
  ): ReturnType<React.FC<PSearchTableProps<T>>>;
}

const PSearchTable: WithForwardRefType = React.forwardRef<PSearchTableCommands, PSearchTableProps>(
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

    const initPathRef = useRef(window.location.pathname);
    const searchRef = useRef<PSearchCommands>(undefined);
    const tableRef = useRef<PTableCommands>(undefined);
    const lastGetDataDataRef = useRef<PFormValueMap>({});

    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/

    const [isFirstSearchSubmit, setIsFirstSearchSubmit] = useState(true);
    const [tableData, setTableData] = useState<PSearchTableData>();

    /********************************************************************************************************************
     * searchInfo
     * ******************************************************************************************************************/

    const searchInfoFirstUseEffect = useRef(true);
    const [searchInfo, setSearchInfo] = useState<PSearchTableSearchInfo>(() => getSearchInfo(search));
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
    const [tableInfo, setTableInfo] = useState<PSearchTableTableInfo>(() => getTableInfo(table));
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
      (data: PFormValueMap) => {
        lastGetDataDataRef.current = data;

        if (onGetData) {
          onGetData(data).then(setTableData);
        }
      },
      [onGetData]
    );

    const hashToSearchValue = useCallback((): PFormValueMap | undefined => {
      const commands = searchRef.current;
      if (commands) {
        commands.resetAll();

        const hashValues = deHash();
        Object.keys(hashValues).forEach((name) => {
          const value: PFormValue = hashValues[name];
          if (name === 'page') {
            commands.setValue(name, Number(value) || 1);
          } else {
            const itemCommands = commands.getItem(name);
            if (itemCommands) {
              switch (itemCommands.getType()) {
                case 'PFormCheckbox':
                  if (notEmpty(value)) {
                    const checkCommands = itemCommands as PFormCheckValueItemCommands<any>;
                    if (value.toString() === itemCommands.getValue()?.toString()) {
                      checkCommands.setChecked(true);
                    } else if (value.toString() === checkCommands.getUncheckedValue()?.toString()) {
                      checkCommands.setChecked(false);
                    }
                  }
                  break;
                case 'PFormDatePicker':
                case 'PFormDateTimePicker':
                case 'PFormTimePicker':
                  {
                    if (notEmpty(value)) {
                      const dateCommands = itemCommands as PFormDateValueItemCommands;
                      const format = dateCommands.getFormValueFormat();
                      const itemValue = dayjs(value, format);
                      itemCommands.setValue(itemValue.isValid() ? itemValue : null);
                    } else {
                      itemCommands.setValue(null);
                    }
                  }
                  break;
                case 'PFormDateRangePicker':
                  {
                    const dateRangePickerCommands = itemCommands as PFormDateRangePickerCommands;
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
                case 'PFormYearRangePicker':
                  {
                    const dateRangePickerCommands = itemCommands as PFormYearRangePickerCommands;
                    const fromName = dateRangePickerCommands.getFormValueFromName();
                    const toName = dateRangePickerCommands.getFormValueToName();

                    if (name === fromName) {
                      dateRangePickerCommands.setFromValue(notEmpty(value) ? Number(value) : null);
                    } else if (name === toName) {
                      dateRangePickerCommands.setToValue(notEmpty(value) ? Number(value) : null);
                    }
                  }
                  break;
                case 'PFormMonthPicker':
                  {
                    const monthCommands = itemCommands as PFormMonthPickerCommands;
                    const yearName = monthCommands.getFormValueYearName();
                    const monthName = monthCommands.getFormValueMonthName();

                    if (name === yearName) {
                      monthCommands.setYear(notEmpty(value) ? Number(value) : null);
                    } else if (name === monthName) {
                      monthCommands.setMonth(notEmpty(value) ? Number(value) : null);
                    }
                  }
                  break;
                case 'PFormMonthRangePicker':
                  {
                    const monthRangeCommands = itemCommands as PFormMonthRangePickerCommands;
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

    useForwardLayoutRef(
      ref,
      useMemo<PSearchTableCommands>(
        () => ({
          reload: (page?: number) => {
            if (page != null) {
              tableRef.current?.scrollToTop();
            }

            let finalData: PFormValueMap;
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
        }),
        [getData, hash, hashToSearchValue]
      )
    );

    /********************************************************************************************************************
     * hash
     * ******************************************************************************************************************/

    useEffect(() => {
      if (hash && window.location.pathname === initPathRef.current) {
        const data = hashToSearchValue();
        if (data) getData(data);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.hash]);

    const hashChange = useCallback(
      (params: PFormValueMap) => {
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
                  let resetValue: PFormValue | null = null;

                  switch (itemCommands.getType()) {
                    case 'PFormDateRangePicker':
                    case 'PFormYearRangePicker':
                      {
                        const commands = itemCommands as PFormRangeValueItemNameCommands;
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
                    case 'PFormMonthPicker':
                      {
                        const commands = itemCommands as PFormMonthPickerCommands;
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
                    case 'PFormMonthRangePicker':
                      {
                        const commands = itemCommands as PFormMonthRangePickerCommands;
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

        let finalData: PFormValueMap | undefined;
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
      (data: PFormValueMap) => {
        tableRef.current?.scrollToTop();

        if (isFirstSearchSubmit) {
          setIsFirstSearchSubmit(false);
          if (!hash) {
            getData(data);
          }
        } else {
          searchRef.current?.setValue('page', 1);
          const finalData: PFormValueMap = { ...data, page: 1 };
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

    const searchView = useMemo(
      () => (
        <Grid sx={{ display: searchInfo.searchGroups ? undefined : 'none' }}>
          <PSearch
            color={color}
            {...searchInfo.props}
            ref={(commands: PSearchCommands) => {
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
            <PSearchGroup hidden>
              <PFormHidden name='page' value={1} />
            </PSearchGroup>
            {searchInfo.searchGroups}
          </PSearch>
        </Grid>
      ),
      [color, handleSearchSubmit, searchInfo]
    );

    const tableView = useMemo(
      () => (
        <Grid style={fullHeight ? { flex: 1, display: 'flex', flexDirection: 'column' } : undefined}>
          <PTable
            {...tableInfo.props}
            stickyHeader={stickyHeader || tableInfo.props?.stickyHeader}
            fullHeight={fullHeight || tableInfo.props?.fullHeight}
            ref={(commands: PTableCommands) => {
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
      ),
      [fullHeight, handlePageChange, stickyHeader, tableData?.items, tableData?.paging, tableInfo]
    );

    return (
      <Grid
        container
        direction='column'
        spacing={1}
        className={classNames('PSearchTable', className)}
        style={fullHeight ? { ...initStyle, flex: 1, display: 'flex' } : initStyle}
        sx={sx}
      >
        {searchView}
        {betweenSearchTableComponent && <Grid>{betweenSearchTableComponent}</Grid>}
        {tableView}
      </Grid>
    );
  }
);

export default PSearchTable;
