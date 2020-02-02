import React from 'react';
import StyledButton from '@styles/components/Button.styled';
import { buttonPaths } from '@utilities/buttonPaths';

type ButtonProps = {
  kind: string;
  handleClick: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {

  const Start = (): JSX.Element =>
    <svg width="44.398" height="50" viewBox="0 0 44.398 50">
      <path d={buttonPaths.start} transform="translate(54.392 -7.309) rotate(90)" fill="#aaa" />
    </svg>;

  const Pause = (): JSX.Element =>
    <svg width="41.949" height="50" viewBox="0 0 41.949 50">
      <g transform="translate(33 404)">
        <path d={buttonPaths.pause} transform="translate(-5.034 -404)" fill="#aaa"/>
        <path d={buttonPaths.pause} transform="translate(-33 -404)" fill="#aaa"/>
      </g>
    </svg>;

  const Stop = (): JSX.Element =>
    <svg width="50" height="50" viewBox="0 0 50 50">
      <path d={buttonPaths.stop} fill="#aaa"/>
    </svg>;

  const renderSwitch = (kind: string): JSX.Element => {
    switch (kind) {
    case 'start':
      return <Start />;
    case 'pause':
      return <Pause />;
    default:
      return <Stop />;
    }
  };

  return (
    <StyledButton onClick={ props.handleClick }>{ renderSwitch(props.kind) }</StyledButton>
  );
};
