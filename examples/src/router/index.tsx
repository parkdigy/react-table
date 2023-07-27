import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Table, SearchTable, InfoTable } from '#comp';

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/table' element={<Table />} />
      <Route path='/search_table' element={<SearchTable />} />
      <Route path='/info_table' element={<InfoTable />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default routes;
