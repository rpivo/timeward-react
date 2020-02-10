import React from 'react';
import { Dashboard } from '@pages/Dashboard';
import { Header } from '@components/Header';
import { Page } from '@components/Page';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@styles/theme';
import { GlobalStyle } from '@styles/global';

export const App = (): JSX.Element =>
  <ThemeProvider theme={ Theme }>
    <GlobalStyle />
    <div className='app'>
      <Header />
      <Page>
        <Dashboard />
      </Page>
    </div>
  </ThemeProvider>;

