import React, { useContext } from 'react';
import { DashboardContext } from '@pages/Dashboard';
import { constructStringFromSeconds } from '@utilities/time';
import { StyledTimesheet, StyledRecord } from '@styles/components/Timesheet.styled';

type TimesheetProps = { children: React.ReactNode };

type TimesheetComposition = { Record: React.FC };

const Record: React.FC = (): JSX.Element => {
  const { store } = useContext(DashboardContext);
  return (
    <>
      {store.map((record, index) =>
        <StyledRecord key={index}>
          { constructStringFromSeconds(record.seconds) } / {record.label}
        </StyledRecord>
      )}
    </>
  );
};

const Timesheet: React.FC<TimesheetProps> & TimesheetComposition =
  ({ children }: TimesheetProps): JSX.Element =>
    <StyledTimesheet>{ children }</StyledTimesheet>;

Timesheet.Record = Record;

export default Timesheet;
