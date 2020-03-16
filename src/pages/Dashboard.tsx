import React, { createContext, useReducer, useRef } from 'react';
import Alignment from '@components/Alignment';
import Graph from '@components/Graph';
import PieChart from '@components/PieChart';
import Section from '@components/Section';
import Tile from '@components/Tile';
import Timeline from '@components/Timeline';
import Timer from '@components/Timer';
import Timesheet from '@components/Timesheet';
import StyledDashboard from '@styles/pages/Dashboard.styled';

type Action = {
  type: 'button clicked';
  payload: number;
};
type Store = {
  label: string | undefined;
  seconds: number;
}[];

type DashboardContextType = {
  dispatch: React.Dispatch<Action>;
  store: Store;
}

export const DashboardContext = createContext({} as DashboardContextType);

const Dashboard: React.FC = (): JSX.Element => {

  const ref = useRef<HTMLInputElement>(null);

  const reducer = (state: Store, action: Action): Store => {
    switch (action.type) {
    case 'button clicked':
      return [
        ...state,
        {
          label: ref?.current?.value,
          seconds: action.payload,
        },
      ];
    default:
      return state;
    }
  };

  const dashboardStore = [
    {
      label: '',
      seconds: 0,
    },
  ];
  const [store, dispatch] = useReducer(reducer, dashboardStore);

  const handleBlur = (): void => console.log(ref?.current?.value);

  return (
    <StyledDashboard>
      <Section>
        <DashboardContext.Provider value={{ dispatch, store }}>
          <Tile>
            <Alignment horizontal>
              <input ref={ref} type='text' onBlur={(): void => handleBlur()}></input>
            </Alignment>
            <Alignment horizontal>
              <Timer />
            </Alignment>
            <Timesheet>
              <Timesheet.Record />
            </Timesheet>
          </Tile>
        </DashboardContext.Provider>
        <Tile>
          <Graph />
        </Tile>
      </Section>
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
