import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FormToggleButtonGroup,
  FormText,
  FormValueMap,
  SearchGroup,
  FormSelect,
  Search,
  FormCheckbox,
  FormSelectItem,
  FormToggleButtonGroupItem,
  SearchButton,
  FormDateRangePicker,
  FormDatePicker,
  FormDateTimePicker,
  FormTimePicker,
} from '@pdg/react-form';
import { useNavigate } from 'react-router-dom';
import { SearchTable as _SearchTable, SearchTableData, SearchTableCommands, SearchTableProps } from '../../../../src';
import { TableData } from '#ccomp';
import { TTableDataItem } from '../Common/TableData';
import { TableProps } from '@pdg/react-table';

const SearchTable = () => {
  const navigate = useNavigate();

  //--------------------------------------------------------------------------------------------------------------------

  const searchTableRef = useRef<SearchTableCommands<TTableDataItem>>(null);

  //--------------------------------------------------------------------------------------------------------------------

  const handleSelectLoadItems = useCallback(() => {
    return new Promise<FormSelectItem[]>((resolve) => {
      setTimeout(() => {
        resolve([lv('전체', ''), lv('거래처 1', 1), lv('거래처 2', 2), lv('거래처 3', 3)]);
      }, 500);
    });
  }, []);

  const handleToggleButtonGroupLoadItems = useCallback(() => {
    return new Promise<FormToggleButtonGroupItem[]>((resolve) => {
      setTimeout(() => {
        resolve([lv('전체', ''), lv('1', 1), lv('2', 2), lv('3', 3)]);
      }, 500);
    });
  }, []);

  //--------------------------------------------------------------------------------------------------------------------

  const [hash, setHash] = useState(true);
  const [search] = useState<SearchTableProps['search']>({
    searchGroups: (
      <>
        <SearchGroup max>
          <FormText name='keyword' label='검색어' />
          <FormSelect name='customer' label='거래처' formValueSort onLoadItems={handleSelectLoadItems} />
          <FormToggleButtonGroup
            name='FormToggleButtonGroup'
            value=''
            notAllowEmptyValue
            onLoadItems={handleToggleButtonGroupLoadItems}
          />
          <FormDateRangePicker name='FormDateRangePicker' startLabel='조회기간' endLabel='조회기간' inputWidth={120} />
          <FormDatePicker name='FormDatePicker' label='조회일자' width={120} />
          <FormTimePicker name='FormTimePicker' label='조회시간' time='minute' width={80} />
          <FormDateTimePicker name='FormDateTimePicker' label='조회일시' time='minute' />
        </SearchGroup>
        <SearchGroup align='right'>
          <SearchButton
            icon='download'
            onClick={() => {
              searchTableRef.current?.reload();
            }}
          />
          <SearchButton startIcon='add' variant='contained'>
            새 항목
          </SearchButton>
        </SearchGroup>
      </>
    ),
  });
  const [table] = useState({
    columns: TableData.columns,
    stickyHeader: true,
    onClick: (item: any) => {
      ll(item);
    },
  });

  //--------------------------------------------------------------------------------------------------------------------

  const handleGetData = useCallback((params: FormValueMap) => {
    return new Promise<SearchTableData<TTableDataItem>>((resolve) => {
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

  //--------------------------------------------------------------------------------------------------------------------

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Search>
        <SearchGroup>
          <FormCheckbox
            name='hash'
            text='hash (해시태그 사용)'
            checked={hash}
            onChange={(checked) => {
              searchTableRef.current?.getSearch()?.resetAll();
              setHash(checked);
            }}
          />
        </SearchGroup>
      </Search>
      <br />
      <_SearchTable<TTableDataItem>
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
