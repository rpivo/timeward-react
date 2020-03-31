import React, { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { constructStringFromSeconds } from '@utilities/time';
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
  const [inputValue, setInputValue] = useState('');
  const [totalSeconds, setTotalSeconds] = useState(0);

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
    }
  };

  const [store, dispatch] = useReducer(reducer, initialDashboardStore);

  useEffect((): void => {
    setTotalSeconds(prevState => prevState + store.slice(-1)[0].seconds);
    setInputValue('');
  }, [store]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setInputValue(event.target.value);

  return (
    <StyledDashboard>
      <Section>
        <DashboardContext.Provider value={{ dispatch, store }}>
          <Tile>
            <Alignment horizontal>
              <input onChange={ handleChange } ref={ ref } type='text' value={ inputValue } />
            </Alignment>
            <Alignment horizontal>
              <Timer />
            </Alignment>
            <Timesheet>
              <Timesheet.Record />
              <div>Today: { constructStringFromSeconds(totalSeconds) }</div>
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
          <Timeline.Day day={0} recordCount={ store.length } />
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
