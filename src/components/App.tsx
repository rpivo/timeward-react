import React from 'react';
import { Dashboard } from '@pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@styles/theme';
import { GlobalStyle } from '@styles/global';

export const App = (): JSX.Element =>
  <ThemeProvider theme={ Theme }>
    <GlobalStyle />
    <div className='app'>
      <Dashboard />
    </div>
  </ThemeProvider>;

