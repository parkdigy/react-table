/********************************************************************************************************************
 * App 컴포넌트
 * ******************************************************************************************************************/

import './init';

import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { DefaultLayout } from './layout';

import './sass/index.scss';

const App = () => {
  useEffect(() => {
    const el = document.getElementById('___appLoading');
    el?.remove();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
