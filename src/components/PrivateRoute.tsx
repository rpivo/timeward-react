import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.ComponentType;
  isAuthorized: boolean;
  path?: string;
};

const PrivateRoute: React.FC<PrivateRouteProps> =
  ({ component: Component, isAuthorized, ...rest }: PrivateRouteProps): JSX.Element =>
    <Route
      render={(): JSX.Element => isAuthorized ? <Component /> : <Redirect to='/login' />}
      {...rest}
    />;

export default PrivateRoute;
