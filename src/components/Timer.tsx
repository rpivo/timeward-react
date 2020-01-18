import React from 'react';
import { Button } from '@components/Button';

interface TimerState {
  buttonType: string;
  time: number;
}

export class Timer extends React.Component <{}, TimerState> {

  public state: TimerState = {
    buttonType: 'start',
    time: 0,
  };

  constructor(props: {}, private interval: number) {
    super(props);
  }

    this.initTimer();
  }

  private setButtonType(): void {
    this.setState({ buttonType: this.state.buttonType === 'start' ? 'stop' : 'start' });
  }

  private initTimer(): void {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  public render(): JSX.Element {
    return (
      <div>
        { this.state.time }
        <Button kind={ this.state.buttonType } handleClick={ this.setButtonType } />
      </div>
    );
  }
}
