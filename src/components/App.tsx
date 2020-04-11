import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Header from '@components/Header';
import Page from '@components/Page';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@styles/theme';
import { GlobalStyle } from '@styles/global';

const Dashboard = lazy(() => import('@pages/Dashboard'));

const App: React.FC = (): JSX.Element =>
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
              <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>
            </Route>
          </Switch>
        </Page>
      </Router>
    </div>
  </ThemeProvider>;

export default App;
