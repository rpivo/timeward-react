import React from 'react';
import StyledTimeline from '@styles/components/Timeline.styled';

type TimelineProps = {
  children: React.ReactNode;
};

type DayProps = {
  day: number;
}

const Day = (props: DayProps): JSX.Element => {
  const getDayString = (): string => {
    const date = new Date();
    date.setDate(date.getDate() - props.day);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
  };
  return <div className='day'>{ getDayString() }</div>;
};

const Timeline = (props: TimelineProps): JSX.Element =>
  <StyledTimeline>{ props.children }</StyledTimeline>;

Timeline.Day = Day;

export default Timeline;
