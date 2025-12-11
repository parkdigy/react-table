import React from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';

const DefaultLayout = () => {
  //--------------------------------------------------------------------------------------------------------------------

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminLayout.DefaultLayout logo='react-hook' menu={menu}>
        <MainRouter />
      </AdminLayout.DefaultLayout>
    </ThemeProvider>
  );
};

export default DefaultLayout;
