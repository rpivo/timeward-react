import React from 'react';
import { Timer } from '@components/Timer';
import { Timesheet } from '@components/Timesheet';
import { PieChart } from '@components/PieChart';
import StyledDashboard from '@styles/pages/Dashboard.styled';

export class Dashboard extends React.Component {
  public render(): JSX.Element {
    return (
      <StyledDashboard>
        <Timer />
        <PieChart />
        <Timesheet />
      </StyledDashboard>
    );
  }
}
