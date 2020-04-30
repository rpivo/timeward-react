import React, { useContext } from 'react';
import { DashboardContext } from '@pages/Dashboard';
import StyledBarGraph from '@styles/components/BarGraph.styled';

const Bar: React.FC = (): JSX.Element => {
  const { store, totalSeconds } = useContext(DashboardContext);
  const heights: number[] = [];

  const getPreviousHeights = (index: number): number =>
    heights
      .slice(0, index)
      .reduce((acc, curr) => acc + curr, 0);

  return (
    <svg width='65'>
      {store.map((record, index, arr) => {
        const height = ~~((record.seconds / totalSeconds) * 100);
        heights.push(height);
        if (record.seconds) return (
          <rect
            id={`bar-monday-${index - 1}`}
            fill={record.color}
            key={index}
            height={arr[index + 1] ? `${height}%` : `${100 - getPreviousHeights(index)}%`}
            width='100%'
            x='0'
            y={`${getPreviousHeights(index)}%`}
          />
        );
        return null;
      }
      )}
    </svg>
  );
};

const BarGraph: React.FC = (): JSX.Element =>
  <StyledBarGraph>
    <Bar />
    <Bar />
    <Bar />
    <Bar />
    <Bar />
    <Bar />
    <Bar />
  </StyledBarGraph>;

export default BarGraph;
