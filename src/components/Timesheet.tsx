import React from 'react';
import { StyledTimesheet, StyledRecord } from '@styles/components/Timesheet.styled';

type TimesheetProps = {
  children: React.ReactNode;
};

const Record = (): JSX.Element =>
  <StyledRecord>Time Record</StyledRecord>;

const Timesheet = (props: TimesheetProps): JSX.Element =>
  <StyledTimesheet>{ props.children }</StyledTimesheet>;

Timesheet.Record = Record;

export default Timesheet;
