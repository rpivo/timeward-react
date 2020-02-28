import React from 'react';
import Alignment from '@components/Alignment';
import PieChart from '@components/PieChart';
import Tile from '@components/Tile';
import Timeline from '@components/Timeline';
import Timer from '@components/Timer';
import Timesheet from '@components/Timesheet';
import StyledDashboard from '@styles/pages/Dashboard.styled';

const Dashboard = (): JSX.Element =>
  <StyledDashboard>
    <Tile>
      <Alignment horizontal>
        <Timer />
      </Alignment>
      <Timesheet>
        <Timesheet.Record />
        <Timesheet.Record />
        <Timesheet.Record />
      </Timesheet>
    </Tile>
    <PieChart />
    <Tile width='full'>
      <Timeline>
        <Timeline.Date />
        <Timeline.Date />
        <Timeline.Date />
      </Timeline>
    </Tile>
  </StyledDashboard>;

export default Dashboard;
