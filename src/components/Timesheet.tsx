import React from 'react';
import StyledTimesheet from '@styles/components/Timesheet.styled';

type TimesheetProps = {
  children: React.ReactNode;
};

const Record = (): JSX.Element =>
  <div>Time Record</div>;

export const Timesheet = (props: TimesheetProps): JSX.Element =>
  <StyledTimesheet>{ props.children }</StyledTimesheet>;

Timesheet.Record = Record;

export default Timesheet;
