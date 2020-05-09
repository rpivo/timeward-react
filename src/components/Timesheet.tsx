import React from 'react';
import { StyledTimesheet, StyledRecord } from '@styles/components/Timesheet.styled';

type RecordProps = {
  readonly label: string;
  readonly seconds: string;
};

type TimesheetProps = { children: React.ReactNode };

type TimesheetComposition = { Record: React.FC<RecordProps> };

const Record: React.FC<RecordProps> = ({ label, seconds }: RecordProps): JSX.Element =>
  <StyledRecord>{ seconds } / { label }</StyledRecord>;

const Timesheet: React.FC<TimesheetProps> & TimesheetComposition =
  ({ children }: TimesheetProps): JSX.Element => <StyledTimesheet>{ children }</StyledTimesheet>;

Timesheet.Record = Record;

export default Timesheet;
