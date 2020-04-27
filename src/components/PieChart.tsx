import React, { useContext } from 'react';
import { DashboardContext } from '@pages/Dashboard';
import StyledPieChart from '@styles/components/PieChart.styled';

const PieChart: React.FC = (): JSX.Element => {
  const { store, totalSeconds } = useContext(DashboardContext);
  const strokes: number[] = [];

  const getPreviousStrokeLengths = (index: number): number =>
    strokes
      .slice(0, index)
      .reduce((acc, curr) => acc + curr, 0);

  const getRotation = (index: number): number =>
    ((getPreviousStrokeLengths(index) / 157) * 360) - 90;

  const getRandomHexColor = (): string => `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`;

  return (
    <StyledPieChart>
      <svg
        width='100'
        height='100'
        viewBox='0 0 100 100'
      >
      </svg>
      {store.map((record, index) => {
        const stroke = ~~((record.seconds / totalSeconds) * 157);
        strokes.push(stroke);
        if (record.seconds) return (
          <svg
            key={index}
            width='100'
            height='100'
            viewBox='0 0 100 100'
            style={{ transform: `rotate(${getRotation(index)}deg)` }}
          >
            <circle
              r='25'
              cx='50'
              cy='50'
              fill='transparent'
              stroke={getRandomHexColor()}
              strokeDasharray={`${stroke} 157`}
              strokeWidth='50'
            />
          </svg>
        );
        return null;
      })}
    </StyledPieChart>
  );
};

export default PieChart;

