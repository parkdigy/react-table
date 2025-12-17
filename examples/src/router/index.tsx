import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Home } from '@comp';

const RootRoutes = () => {
  const rootPath = env.isProduction ? `/${env.name}/` : '/';

  const basicRoutes = (
    <>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to={rootPath} />} />
    </>
  );

  return (
    <Routes>
      <Route path={`${rootPath}*`} element={<Routes>{basicRoutes}</Routes>} />
      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default RootRoutes;
