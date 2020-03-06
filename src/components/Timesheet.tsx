import React, { useContext } from 'react';
import { DashboardContext } from '@pages/Dashboard';
import { StyledTimesheet, StyledRecord } from '@styles/components/Timesheet.styled';

type TimesheetProps = {
  children: React.ReactNode;
};

const Record = (): JSX.Element => {
  const context = useContext(DashboardContext);
  return <StyledRecord>{ context }</StyledRecord>;
};


const Timesheet = (props: TimesheetProps): JSX.Element =>
  <StyledTimesheet>{ props.children }</StyledTimesheet>;

Timesheet.Record = Record;

export default Timesheet;
