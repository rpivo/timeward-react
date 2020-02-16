import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from '@pages/Dashboard';
import { Login } from '@pages/Login';
import { Header } from '@components/Header';
import { Page } from '@components/Page';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@styles/theme';
import { GlobalStyle } from '@styles/global';

export const App = (): JSX.Element =>
  <ThemeProvider theme={ Theme }>
    <GlobalStyle />
    <div className='app'>
      <Router>
        <Header />
        <Page>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <Dashboard />
            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  </ThemeProvider>;

