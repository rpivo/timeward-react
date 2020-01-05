import React from 'react';
import { Timer } from '@components/Timer';
import StyledDashboard from '@pages/styles/Dashboard.styled';

export class Dashboard extends React.Component {
  render(): JSX.Element { return (
      <StyledDashboard>
          <Timer />
      </StyledDashboard>
    );
  }
}