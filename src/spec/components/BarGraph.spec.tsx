import React from 'react';
import renderer from 'react-test-renderer';
import { DashboardContext } from '@pages/Dashboard';
import BarGraph from '@components/BarGraph';

describe('BarGraph', () => {
  it('should render correctly', () => {
    const dispatch = jest.fn();
    const store = [
      {
        label: 'work',
        seconds: 10,
      },
      {
        label: 'play',
        seconds: 20,
      },
    ];
    const totalSeconds = 0;
    const tree = renderer
      .create(
        <DashboardContext.Provider value={{ dispatch, store, totalSeconds }}>
          <BarGraph />
        </DashboardContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
