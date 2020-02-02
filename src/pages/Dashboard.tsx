import React from 'react';
import { Tile } from '@components/Tile';
import { Timer } from '@components/Timer';
import { Timesheet } from '@components/Timesheet';
import { PieChart } from '@components/PieChart';
import StyledDashboard from '@styles/pages/Dashboard.styled';

export class Dashboard extends React.Component {
  public render(): JSX.Element {
    return (
      <StyledDashboard>
        <Tile>
          <Timer />
          <Timesheet />
        </Tile>
        <PieChart />
      </StyledDashboard>
    );
  }
}
