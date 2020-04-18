import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Login';
import Header from '@components/Header';
import Page from '@components/Page';
import PrivateRoute from '@components/PrivateRoute';
import { ThemeProvider } from 'styled-components';
import { Theme } from '@styles/theme';
import { GlobalStyle } from '@styles/global';

const App: React.FC = (): JSX.Element => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className='app'>
        <Router>
          <Header isAuthorized={isAuthorized} />
          <Page>
            <Switch>
              <Route
                path="/login"
                render={(): JSX.Element => <Login setIsAuthorized={setIsAuthorized} />}
              />
              <PrivateRoute isAuthorized={isAuthorized} path="*" component={Dashboard} />
            </Switch>
          </Page>
        </Router>
      </div>
    </ThemeProvider>

  );
};

export default App;
