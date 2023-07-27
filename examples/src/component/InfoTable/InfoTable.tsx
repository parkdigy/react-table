import React from 'react';
import { InfoTable as _InfoTable } from '../../../../src';

interface Info {
  id: number;
  name: string;
  tel: string;
  address: string;
  url: string;
}

const info: Info = {
  id: 123,
  name: '장동건',
  tel: '010-0000-0000',
  address: '서울시 강남구 대치동 123-123 aoiweoa iejaopwegijaw pegijawoijaepogia jwpegoijawe',
  url: 'https://www.google.com apoj aweiojgpaweogij apwegij apweigjaw pegi',
};

const InfoTable = () => {
  return (
    <div>
      <_InfoTable<Info>
        labelXs={1}
        valueXs={3}
        info={info}
        items={[
          { label: 'ID', name: 'id' },
          { label: '이름', name: 'name' },
          { label: '전화번호', name: 'tel' },
          { label: '주소', name: 'address', ellipsis: true },
          { label: 'URL', name: 'url' },
        ]}
      />
    </div>
  );
};

export default InfoTable;
