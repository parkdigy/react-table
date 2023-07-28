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
  id: 1,
  name: 'Steve Park',
  tel: '010-0000-0000',
  address: '서울시 강남구 대치동 123-123 aoiweoa iejaopwegijaw pegijawoijaepogia jwpegoijawe',
  url: 'https://www.google.com',
};

const InfoTable = () => {
  return (
    <div>
      <_InfoTable<Info>
        cols={3}
        labelColor='primary'
        info={info}
        items={[
          {
            label: 'ID',
            name: 'id',
            onRender(info) {
              return info.id;
            },
          },
          { label: '이름', name: 'name' },
          { label: '전화번호', name: 'tel', labelColor: 'secondary' },
          { label: '주소', name: 'address', ellipsis: true },
          { label: 'URL', name: 'url' },
        ]}
      />
    </div>
  );
};

export default InfoTable;