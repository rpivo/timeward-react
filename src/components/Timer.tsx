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

  constructor(
    props: {},
    private interval: number,
    private hours: number,
    private minutes: number,
    private seconds: number,
  ) {
    super(props);
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  private convertNumberToPaddedString(num: number | string): string {
    num = num.toString();
    return num.length < 2 ? num.padStart(2, '0') : num;
  }

  private constructStringFromSeconds(): string {
    if (this.state.seconds > 0 && this.state.seconds % 60 === 0) {
      this.seconds = 0;
      this.minutes += 1;
      if (this.minutes > 0 && this.minutes % 60 === 0) {
        this.minutes = 0;
        this.hours += 1;
      }
    } else this.seconds = this.state.seconds % 60;

    return `
    ${this.convertNumberToPaddedString(this.hours)}:\
    ${this.convertNumberToPaddedString(this.minutes)}:\
    ${this.convertNumberToPaddedString(this.seconds)}
    `;
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
    this.hours = 0;
    this.minutes = 0;
    this.setState({
      buttonType: 'start',
      seconds: 0,
    }, () => clearInterval(this.interval));
  }

  public render(): JSX.Element {
    return (
      <div>
        <span>{ this.constructStringFromSeconds() }</span>
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
