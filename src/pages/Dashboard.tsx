import React, { createContext, useEffect, useReducer, useRef } from 'react';
import Alignment from '@components/Alignment';
import Graph from '@components/Graph';
import PieChart from '@components/PieChart';
import Section from '@components/Section';
import Tile from '@components/Tile';
import Timeline from '@components/Timeline';
import Timer from '@components/Timer';
import Timesheet from '@components/Timesheet';
import StyledDashboard from '@styles/pages/Dashboard.styled';

type DashboardAction = {
  type: 'stop';
  payload: number;
};

type DashboardStore = {
  label: string | undefined;
  seconds: number;
}[];

const initialDashboardStore: DashboardStore = [
  {
    label: '',
    seconds: 0,
  },
];

type DashboardContextType = {
  dispatch: React.Dispatch<DashboardAction>;
  store: DashboardStore;
}

export const DashboardContext = createContext({} as DashboardContextType);

const Dashboard: React.FC = (): JSX.Element => {

  const ref = useRef<HTMLInputElement>(null);

  const reducer = (state: DashboardStore, action: DashboardAction): DashboardStore => {
    switch (action.type) {
    case 'stop':
    default:
      return [
        ...state,
        {
          label: ref.current!.value,
          seconds: action.payload,
        },
      ];
    default:
      return state;
    }
  };

  const [store, dispatch] = useReducer(reducer, initialDashboardStore);

  useEffect((): void => {
    ref.current!.value = '';
  }, [store]);

  const handleBlur = (): void => console.log(typeof ref.current!.value);

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
