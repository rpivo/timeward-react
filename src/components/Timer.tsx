import React, { memo, useContext, useEffect, useState } from 'react';
import { DashboardContext } from '@pages/Dashboard';
import Button, { ButtonProps } from '@components/Button';
import StyledTimer from '@styles/components/Timer.styled';

const Timer: React.FC = (): JSX.Element => {
  const { dispatch } = useContext(DashboardContext);
  const [state, setState] = useState({
    buttonType: 'start',
    clockHours: 0,
    clockMinutes: 0,
    clockSeconds: 0,
    timeInterval: false,
    totalSeconds: 0,
  });

  useEffect(() => {
    let interval: number | undefined;
    if (state.timeInterval) {
      interval = setInterval(() => {
        setState(prevState => ({ ...prevState, totalSeconds: prevState.totalSeconds + 1 }));
      }, 1000);
    } else if (!state.timeInterval) {
      clearInterval(interval);
    }
    return (): void => clearInterval(interval);
  }, [state.timeInterval, state.totalSeconds]);

  const convertNumberToPaddedString = (num: number | string): string => {
    num = num.toString();
    return num.length < 2 ? num.padStart(2, '0') : num;
  };

  const constructStringFromSeconds = (): string => {
    if (state.totalSeconds > 0 && state.totalSeconds % 60 === 0) {
      state.clockSeconds = 0;
      state.clockMinutes += 1;
      if (state.clockMinutes > 0 && state.clockMinutes % 60 === 0) {
        state.clockMinutes = 0;
        state.clockHours += 1;
      }
    } else state.clockSeconds = state.totalSeconds % 60;

    return (`${
      convertNumberToPaddedString(state.clockHours)}:${
      convertNumberToPaddedString(state.clockMinutes)}:${
      convertNumberToPaddedString(state.clockSeconds)}
    `);
  };

  const toggleTimer = (): void => {
    if (state.buttonType === 'start') {
      setState(prevState => ({ ...prevState, buttonType: 'pause', timeInterval: true }));
      return;
    }
    setState(prevState => ({ ...prevState, buttonType: 'start', timeInterval: false }));
  };

  const stopTimer = (): void => {
    dispatch({
      payload: state.totalSeconds,
      type: 'stop',
    });
    setState({
      buttonType: 'start',
      clockHours: 0,
      clockMinutes: 0,
      clockSeconds: 0,
      timeInterval: false,
      totalSeconds: 0,
    });
  };

  const MemoizedButton = memo(({ kind, handleClick }: ButtonProps) => {
    MemoizedButton.displayName = 'MemoizedButton';
    return <Button kind={ props.kind } handleClick={ props.handleClick } />;
  });

  return (
    <StyledTimer>
      <span>{ constructStringFromSeconds() }</span>
      <MemoizedButton kind={state.buttonType} handleClick={ (): void => toggleTimer() } />
      <MemoizedButton kind='stop' handleClick={ (): void => stopTimer() } />
    </StyledTimer>
  );
};

export default Timer;
