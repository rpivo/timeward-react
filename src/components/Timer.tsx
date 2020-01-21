import React from 'react';
import { Button } from '@components/Button';

interface TimerState {
  buttonType: string;
  seconds: number;
}

export class Timer extends React.Component <{}, TimerState> {

  public state: TimerState = {
    buttonType: 'start',
    seconds: 0,
  };

  constructor(props: {}, private interval: number) {
    super(props);
  }

  private convertSecondsToString(seconds: number): string {
    if (seconds < 10) return seconds.toString().padStart(2, '0');
    return seconds.toString();
  }

  private startTimer(): void {
    this.setState({ buttonType: 'pause' }, () => {
      this.interval = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    });
  }

  private pauseTimer(): void {
    this.setState({ buttonType: 'start' }, () => clearInterval(this.interval));
  }

  private stopTimer(): void {
    this.setState({
      buttonType: 'start',
      seconds: 0,
    }, () => clearInterval(this.interval));
  }

  public render(): JSX.Element {
    return (
      <div>
        <span>00:00:{ this.convertSecondsToString(this.state.seconds) }</span>
        <Button
          kind={ this.state.buttonType }
          handleClick={
            this.state.buttonType === 'start'
              ? (): void => this.startTimer()
              : (): void => this.pauseTimer()
          }
        />
        <Button kind='stop' handleClick={ (): void => this.stopTimer() } />
      </div>
    );
  }
}
