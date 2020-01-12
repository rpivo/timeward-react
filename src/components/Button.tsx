import React from 'react';
import StyledButton from '@components/styles/StyledButton';

interface ButtonProps { kind: string }

export class Button extends React.Component <ButtonProps, {}> {
  public render(): JSX.Element {
    return <button>{ this.props.kind }</button>;
  }
}
