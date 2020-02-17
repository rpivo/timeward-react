import React from 'react';
import StyledTimesheet from '@styles/components/Timesheet.styled';
import { TimeRecord } from '@components/TimeRecord';

export const Timesheet = (): JSX.Element =>
  <StyledTimesheet>
    <TimeRecord />
    <TimeRecord />
    <TimeRecord />
  </StyledTimesheet>;
