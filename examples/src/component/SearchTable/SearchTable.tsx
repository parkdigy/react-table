import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  PFormToggleButtonGroup,
  PFormText,
  PFormValueMap,
  PSearchGroup,
  PFormSelect,
  PSearch,
  PFormCheckbox,
  PSearchButton,
  PFormDateRangePicker,
  PFormDatePicker,
  PFormDateTimePicker,
  PFormTimePicker,
  PFormSelectItems,
  PFormToggleButtonGroupItems,
  PFormYearPicker,
  PFormYearRangePicker,
  PFormMonthPicker,
  PFormMonthRangePicker,
} from '@pdg/react-form';
import { useNavigate } from 'react-router';
import {
  PSearchTable as _SearchTable,
  PSearchTableData,
  PSearchTableCommands,
  PSearchTableProps,
} from '../../../../src';
import { TableData } from '@ccomp';
import { TTableDataItem } from '../Common/TableData';
import { lv } from '@pdg/data';

const SearchTable = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const navigate = useNavigate();

  /********************************************************************************************************************
   * Ref
   * ******************************************************************************************************************/

  const searchTableRef = useRef<PSearchTableCommands<TTableDataItem>>(null);

  /********************************************************************************************************************
   * State
   * ******************************************************************************************************************/

  const [hash, setHash] = useState(true);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleSelectLoadItems = useCallback(() => {
    return new Promise<PFormSelectItems<'' | number>>((resolve) => {
      setTimeout(() => {
        resolve([lv('전체', ''), lv('거래처 1', 1), lv('거래처 2', 2), lv('거래처 3', 3)]);
      }, 500);
    });
  }, []);

  const handleToggleButtonGroupLoadItems = useCallback(() => {
    return new Promise<PFormToggleButtonGroupItems<'' | number>>((resolve) => {
      setTimeout(() => {
        resolve([lv('전체', ''), lv('1', 1), lv('2', 2), lv('3', 3)]);
      }, 500);
    });
  }, []);

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const search: PSearchTableProps['search'] = useMemo(
    () => ({
      searchGroups: (
        <>
          <PSearchGroup max>
            <PFormText name='keyword' label='검색어' />
            <PFormSelect name='customer' label='거래처' formValueSort onLoadItems={handleSelectLoadItems} />
            <PFormToggleButtonGroup
              name='FormToggleButtonGroup'
              value=''
              notAllowEmptyValue
              onLoadItems={handleToggleButtonGroupLoadItems}
            />
            <PFormYearPicker name='FormYearPicker' label='조회년도' />
            <PFormMonthPicker name='FormMonthPicker' label='조회월' />
            <PFormDatePicker name='FormDatePicker' label='조회일자' width={120} />
            <PFormTimePicker name='FormTimePicker' label='조회시간' time='minute' width={80} />
            <PFormDateTimePicker name='FormDateTimePicker' label='조회일시' time='minute' />
            <PFormYearRangePicker name='FormYearRangePicker' fromLabel='조회기간(년)' toLabel='조회기간(년)' />
            <PFormMonthRangePicker name='FormMonthRangePicker' fromLabel='조회기간(월)' toLabel='조회기간(월)' />
            <PFormDateRangePicker
              name='FormDateRangePicker'
              fromLabel='조회기간(일)'
              toLabel='조회기간(일)'
              inputWidth={120}
            />
          </PSearchGroup>
          <PSearchGroup align='right'>
            <PSearchButton
              startIcon='download'
              onClick={() => {
                searchTableRef.current?.reload(1);
              }}
            />
            <PSearchButton startIcon='add' startIconMarginLeft={-5} variant='contained'>
              새 항목
            </PSearchButton>
          </PSearchGroup>
        </>
      ),
    }),
    [handleSelectLoadItems, handleToggleButtonGroupLoadItems]
  );

  const table: PSearchTableProps<TTableDataItem>['table'] = useMemo(() => {
    return {
      columns: TableData.columns,
      stickyHeader: true,
      onClick: (item: any) => {
        ll(item);
      },
    };
  }, []);

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleGetData = useCallback((params: PFormValueMap) => {
    ll('handleGetData', params);
    return new Promise<PSearchTableData<TTableDataItem>>((resolve) => {
      const page = params.page as number;
      const total = TableData.items.length;
      const perPage = 10;
      const lastPage = Math.ceil(total / perPage);
      const startIndex = (page - 1) * perPage;
      const lastIndex = Math.min(startIndex + (perPage - 1), total - 1);

      const items: TTableDataItem[] = [];
      for (let i = startIndex; i <= lastIndex; i += 1) {
        items.push(TableData.items[i]);
      }

      const paging = {
        current_page: page,
        per_page: perPage,
        last_page: lastPage,
        total,
      };

      resolve({ items, paging });
    });
  }, []);

  const handleRequestHashChange = useCallback(
    (hash: string) => {
      ll('hash', hash);
      navigate(`#${hash}`);
    },
    [navigate]
  );

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <PSearch>
        <PSearchGroup>
          <PFormCheckbox
            name='hash'
            text='hash (해시태그 사용)'
            checked={hash}
            onChange={(checked) => {
              searchTableRef.current?.getSearch()?.resetAll();
              setHash(checked);
            }}
          />
        </PSearchGroup>
      </PSearch>
      <br />
      <_SearchTable
        betweenSearchTableComponent={<div>betweenSearchTableComponent</div>}
        ref={searchTableRef}
        hash={hash}
        fullHeight
        onGetData={handleGetData}
        onRequestHashChange={handleRequestHashChange}
        search={search}
        table={table}
      />
    </div>
  );
};

export default SearchTable;
