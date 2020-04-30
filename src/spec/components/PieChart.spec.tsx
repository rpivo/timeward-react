import React from 'react';
import renderer from 'react-test-renderer';
import { DashboardContext } from '@pages/Dashboard';
import PieChart from '@components/PieChart';

describe('PieChart', () => {
  it('should render correctly', () => {
    const dispatch = jest.fn();
    const store = [
      {
        color: '#000000',
        label: 'work',
        seconds: 10,
      },
      {
        color: '#111111',
        label: 'play',
        seconds: 20,
      },
    ];
    const totalSeconds = 0;
    const tree = renderer
      .create(
        <DashboardContext.Provider value={{ dispatch, store, totalSeconds }}>
          <PieChart />
        </DashboardContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
