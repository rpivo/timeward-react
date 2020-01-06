import React from 'react';
import { Button } from '@components/Button';

interface TimerState { time: string }

export class Timer extends React.Component <{}, TimerState> {
  public state: TimerState = { time: '00:00:00' };

  public render(): JSX.Element {
    return (
      <div>
        { this.state.time }
        <Button kind='test' />
      </div>
    );
  }
}
