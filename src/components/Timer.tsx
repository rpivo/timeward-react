import React, { useState, useEffect } from 'react';
import { Button } from '@components/Button';
import StyledTimer from '@styles/components/Timer.styled';

export const Timer = (): JSX.Element => {
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

  const startTimer = (): void =>
    setState(prevState => ({ ...prevState, buttonType: 'pause', timeInterval: true }));

  const pauseTimer = (): void =>
    setState(prevState => ({ ...prevState, buttonType: 'start', timeInterval: false }));

  const stopTimer = (): void =>
    setState({
      buttonType: 'start',
      clockHours: 0,
      clockMinutes: 0,
      clockSeconds: 0,
      timeInterval: false,
      totalSeconds: 0,
    });

  return (
    <StyledTimer>
      <span>{ constructStringFromSeconds() }</span>
      <Button
        kind={ state.buttonType }
        handleClick={
          state.buttonType === 'start'
            ? (): void => startTimer()
            : (): void => pauseTimer()
        }
      />
      <Button kind='stop' handleClick={ (): void => stopTimer() } />
    </StyledTimer>
  );
};
