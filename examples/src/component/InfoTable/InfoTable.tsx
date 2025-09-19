import React from 'react';
import { PInfoTable as _InfoTable } from '../../../../src';
import dayjs, { Dayjs } from 'dayjs';

interface Info {
  id: number;
  name: string;
  tel: string;
  email: string;
  address: string;
  url: string;
  business_no: string;
  personal_no: string;
  num_int: number;
  num_float: number;
  date: string;
  datetime: Dayjs;
}

const info: Info = {
  id: 1,
  name: 'Steve Park',
  tel: '01000000000',
  email: 'test@test.com',
  address: '서울시 강남구 대치동 123-123',
  url: 'https://www.google.com',
  business_no: '1112233333',
  personal_no: '1234567890123',
  num_int: 1234567,
  num_float: 1234567.123,
  date: '2024-01-01',
  datetime: dayjs('2024-01-01 12:34:56'),
};

const InfoTable = () => {
  return (
    <div>
      <_InfoTable
        cols={3}
        labelColor='primary'
        info={info}
        rowSpacing={3}
        ellipsis
        valueUnderline
        items={[
          {
            type: 'divider',
            icon: 'Article',
            label: '기본정보',
          },
          {
            label: 'ID',
            name: 'id',
          },
          { label: '이름', name: 'name' },
          { label: '전화번호', type: 'tel', name: 'tel', labelColor: 'secondary' },
          { label: '이메일', type: 'email', name: 'email' },
          { label: '주소', name: 'address', clipboard: true },
          { label: 'URL', type: 'url', name: 'url', clipboard: true },
          {
            type: 'divider',
            icon: 'BlurOn',
            label: '추가정보',
          },
          { label: 'Business No', type: 'business_no', name: 'business_no' },
          { label: 'Personal No', type: 'personal_no', name: 'personal_no' },
          { label: 'Number Integer', type: 'number', name: 'num_int', numberPrefix: '$' },
          { label: 'Number Float', type: 'number', name: 'num_float', numberSuffix: '원' },
          { icon: 'CalendarMonth', label: 'Date', type: 'date', name: 'date' },
          { label: 'Datetime', type: 'datetime', name: 'datetime' },
          { label: 'Datetime', type: 'date-hour', name: 'datetime' },
          { label: 'Datetime', type: 'date-minute', name: 'datetime' },
        ]}
      />
    </div>
  );
};

export default InfoTable;
