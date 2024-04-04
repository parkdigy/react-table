import React, { useMemo } from 'react';
import * as AdminLayout from '@pdg/react-admin-layout';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import menu from './menu.json';
import { theme } from './DefaultLayout.types';
import MainRouter from '../../router';

const DefaultLayout = () => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const navigate = useNavigate();

  /********************************************************************************************************************
   * Memo
   * ******************************************************************************************************************/

  const finalMenu = useMemo(
    () =>
      menu.map((info) => ({
        ...info,
        uri: !info.uri ? info.uri : isEnvProduction ? `/react-table${info.uri}` : info.uri,
        // items: info.items?.map((subInfo) => ({
        //   ...subInfo,
        //   uri: !subInfo.uri ? subInfo.uri : isEnvProduction ? `/react-component${subInfo.uri}` : subInfo.uri,
        // })),
      })),
    []
  );

  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  const handleMenuClick = (menuItem: AdminLayout.MenuItem) => {
    if (menuItem.uri) {
      navigate(menuItem.uri);
    }
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AdminLayout.DefaultLayout logo='@pdg/react-form' menu={finalMenu} onMenuClick={handleMenuClick}>
        <MainRouter />
      </AdminLayout.DefaultLayout>
    </ThemeProvider>
  );
};

export default DefaultLayout;
