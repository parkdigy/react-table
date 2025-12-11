/********************************************************************************************************************
 * App 컴포넌트
 * ******************************************************************************************************************/

import './init';

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import MainRouter from './router';

const App = () => {
  useEffect(() => {
    const el = document.getElementById('___appLoading');
    el?.remove();
  }, []);

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
