import React, { useState } from 'react';
import { Prompt, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  const [isLogoutEnabled, setIsLogoutEnabled] = useState(false);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className='app'>
        <Router>
          <Header isAuthorized={isAuthorized} />
          <Page>
            <Prompt message={(location): string | true =>
              isLogoutEnabled && location.pathname === '/login'
                ? 'Are you sure you want to log out?' : true}
            />
            <Switch>
              <Route
                path="/login"
                render={(): JSX.Element =>
                  <Login
                    isAuthorized={isAuthorized}
                    isLogoutEnabled={isLogoutEnabled}
                    setIsAuthorized={setIsAuthorized}
                    setIsLogoutEnabled={setIsLogoutEnabled}
                  />
                }
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
