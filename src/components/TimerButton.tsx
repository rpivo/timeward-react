import React from 'react';
import StyledButton from '@styles/components/TimerButton.styled';
import { timerButtonPaths } from '@utilities/svg';

export type TimerButtonProps = {
  readonly kind: string;
  readonly handleClick: () => void;
}

const Button: React.FC<TimerButtonProps> =
  ({ kind, handleClick }: TimerButtonProps): JSX.Element => {

    const Start: React.FC = (): JSX.Element =>
      <svg width='15' height="15" viewBox="0 0 50 50">
        <path
          d={timerButtonPaths.start}
          transform="translate(54.392 -7.309) rotate(90)"
          fill="#aaa"
        />
      </svg>;

    const Pause: React.FC = (): JSX.Element =>
      <svg width="15" height="15" viewBox="0 0 50 50">
        <g transform="translate(33 404)">
          <path d={timerButtonPaths.pause} transform="translate(-5.034 -404)" fill="#aaa" />
          <path d={timerButtonPaths.pause} transform="translate(-33 -404)" fill="#aaa" />
        </g>
      </svg>;

    const Stop: React.FC = (): JSX.Element =>
      <svg width="15" height="15" viewBox="0 0 50 50">
        <path d={timerButtonPaths.stop} fill="#aaa" />
      </svg>;

    const renderSwitch = (buttonType: string): JSX.Element => {
      switch (buttonType) {
        case 'start':
          return <Start />;
        case 'pause':
          return <Pause />;
        default:
          return <Stop />;
      }
    };

    return (
      <StyledButton kind={kind} onClick={handleClick}>
        {renderSwitch(kind)}
      </StyledButton>
    );
  };

export default Button;
