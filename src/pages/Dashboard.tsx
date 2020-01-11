import React from 'react';
import { Timer } from '@components/Timer';
import { PieChart } from '@components/PieChart';
import StyledDashboard from '@pages/styles/Dashboard.styled';

export class Dashboard extends React.Component {
  public render(): JSX.Element {
    return (
      <StyledDashboard>
        <Timer />
        <PieChart />
      </StyledDashboard>
    );
  }
}
