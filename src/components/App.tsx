import React from 'react';
import { Dashboard } from '@pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

export class App extends React.Component {
  public render(): JSX.Element {
    return <ThemeProvider theme={ theme }><div className='app'><Dashboard /></div></ThemeProvider>;
  }
}
