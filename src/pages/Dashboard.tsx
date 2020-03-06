import React, { createContext } from 'react';
import Alignment from '@components/Alignment';
import Graph from '@components/Graph';
import PieChart from '@components/PieChart';
import Tile from '@components/Tile';
import Timeline from '@components/Timeline';
import Timer from '@components/Timer';
import Timesheet from '@components/Timesheet';
import StyledDashboard from '@styles/pages/Dashboard.styled';

export const DashboardContext = createContext('');

const Dashboard: React.FC = (): JSX.Element =>
  <StyledDashboard>
    <Tile>
      <Alignment horizontal>
        <Timer />
      </Alignment>
      <DashboardContext.Provider value={'hello'}>
        <Timesheet>
          <Timesheet.Record />
          <Timesheet.Record />
          <Timesheet.Record />
        </Timesheet>
      </DashboardContext.Provider>
    </Tile>
    <Tile>
      <Graph />
    </Tile>
    <PieChart />
    <Tile width='full'>
      <Timeline>
        <Timeline.Day day={0} />
        <Timeline.Day day={1} />
        <Timeline.Day day={2} />
        <Timeline.Day day={3} />
        <Timeline.Day day={4} />
        <Timeline.Day day={5} />
        <Timeline.Day day={6} />
      </Timeline>
    </Tile>
  </StyledDashboard>;

export default Dashboard;
