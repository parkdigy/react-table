import React, { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Home, Table, SearchTable, InfoTable } from '@comp';

const RootRoutes = () => {
  const rootPath = useMemo(() => (env.isProduction ? `/${env.name}/` : '/'), []);

  const basicRoutes = useMemo(
    () => (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/table' element={<Table />} />
        <Route path='/search_table' element={<SearchTable />} />
        <Route path='/info_table' element={<InfoTable />} />
        <Route path='*' element={<Navigate to={rootPath} />} />
      </>
    ),
    [rootPath]
  );

  return (
    <Routes>
      <Route path={`${rootPath}*`} element={<Routes>{basicRoutes}</Routes>} />
      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default RootRoutes;
