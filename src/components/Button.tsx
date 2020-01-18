import React from 'react';
import StyledButton from '@styles/components/Button.styled';

interface ButtonProps {
  kind: string;
  handleClick: () => void;
}

const Start = (): JSX.Element =>
  <svg width="44.398" height="50" viewBox="0 0 44.398 50">
    <path d="M28.682,12.087a4.188,4.188,0,0,1,7.254,0L56.741,48.109a4.188,4.188,0,0,1-3.627,6.283H11.5a4.188,4.188,0,0,1-3.627-6.283Z" transform="translate(54.392 -7.309) rotate(90)" fill="#aaa" />
  </svg>;

const Stop = (): JSX.Element =>
  <svg width="50" height="50" viewBox="0 0 50 50">
    <path d="M4.237,0H45.763A4.237,4.237,0,0,1,50,4.237V45.763A4.237,4.237,0,0,1,45.763,50H4.237A4.237,4.237,0,0,1,0,45.763V4.237A4.237,4.237,0,0,1,4.237,0Z" fill="#aaa"/>
  </svg>;

export class Button extends React.Component <ButtonProps, {}> {

  public render(): JSX.Element {
    return (
      <StyledButton onClick={(): void => this.props.handleClick() }>
        { this.props.kind === 'start' ? <Start /> : <Stop /> }
      </StyledButton>
    );
  }
}
