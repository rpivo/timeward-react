import React from 'react';
import StyledTimeline from '@styles/components/Timeline.styled';

type TimelineProps = { children: React.ReactNode };

type DayProps = {
  day: number;
  recordCount?: number;
};

type TimelineComposition = { Day: React.FC<DayProps> };

const Day: React.FC<DayProps & {}> = ({ day, recordCount }: DayProps): JSX.Element => {
  const getDayString = (): string => {
    const date = new Date();
    date.setDate(date.getDate() - day);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  return (
    <div className='day'>
      { getDayString() }
      <br />
      { recordCount }
    </div>
  );
};

const Timeline: React.FC<TimelineProps> & TimelineComposition =
  ({ children }: TimelineProps): JSX.Element =>
    <StyledTimeline>{ children }</StyledTimeline>;

Timeline.Day = Day;

export default Timeline;
