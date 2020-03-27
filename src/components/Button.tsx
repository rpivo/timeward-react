import React from 'react';
import StyledButton from '@styles/components/Button.styled';
import buttonPaths from '@utilities/svg';

export type ButtonProps = {
  kind: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ kind, handleClick }: ButtonProps): JSX.Element => {

  const Start: React.FC = (): JSX.Element =>
    <svg width="15" height="15" viewBox="0 0 50 50">
      <path d={ buttonPaths.start } transform="translate(54.392 -7.309) rotate(90)" fill="#aaa" />
    </svg>;

  const Pause: React.FC = (): JSX.Element =>
    <svg width="15" height="15" viewBox="0 0 50 50">
      <g transform="translate(33 404)">
        <path d={ buttonPaths.pause } transform="translate(-5.034 -404)" fill="#aaa"/>
        <path d={ buttonPaths.pause } transform="translate(-33 -404)" fill="#aaa"/>
      </g>
    </svg>;

  const Stop: React.FC = (): JSX.Element =>
    <svg width="15" height="15" viewBox="0 0 50 50">
      <path d={ buttonPaths.stop } fill="#aaa"/>
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
    <StyledButton kind={ kind } onClick={ handleClick }>
      { renderSwitch(kind) }
    </StyledButton>
  );
};

export default Button;
