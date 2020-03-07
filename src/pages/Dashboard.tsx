import React, { createContext, useReducer } from 'react';
import Alignment from '@components/Alignment';
import Graph from '@components/Graph';
import PieChart from '@components/PieChart';
import Tile from '@components/Tile';
import Timeline from '@components/Timeline';
import Timer from '@components/Timer';
import Timesheet from '@components/Timesheet';
import StyledDashboard from '@styles/pages/Dashboard.styled';

type Action = { type: 'button clicked' };

type DashboardContextType = {
  dispatch: React.Dispatch<Action>;
  store: string[];
}

export const DashboardContext = createContext({} as DashboardContextType);

const Dashboard: React.FC = (): JSX.Element => {

  const reducer = (state: string[], action: { type: string }): string[] => {
    switch (action.type) {
    case 'button clicked':
      return [...state, 'goodbye'];
    default:
      return state;
    }
  };

  const dashboardStore = ['start'];
  const [store, dispatch] = useReducer(reducer, dashboardStore);

  return (
    <StyledDashboard>
      <DashboardContext.Provider value={{ dispatch, store }}>
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
      </DashboardContext.Provider>
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
    </StyledDashboard >
  );
};

export default Dashboard;
