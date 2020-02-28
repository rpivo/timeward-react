import React from 'react';
import StyledTimeline from '@styles/components/Timeline.styled';

type TimelineProps = {
  children: React.ReactNode;
};

const Date = (): JSX.Element =>
  <div>Date</div>;

const Timeline = (props: TimelineProps): JSX.Element =>
  <StyledTimeline>{ props.children }</StyledTimeline>;

Timeline.Date = Date;

export default Timeline;
