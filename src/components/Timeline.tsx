import React from 'react';
import StyledTimeline from '@styles/components/Timeline.styled';
import { Date } from '@components/Date';

export const Timeline = (): JSX.Element =>
  <StyledTimeline>
    <Date />
    <Date />
    <Date />
  </StyledTimeline>;
