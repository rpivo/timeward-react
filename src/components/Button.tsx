import React from 'react';
import StyledButton from '@components/styles/StyledButton';

interface ButtonProps { kind: string }

export class Button extends React.Component <ButtonProps, {}> {
  public static defaultProps = {
    kind: "start",
  };

  public render(): JSX.Element {
    return <StyledButton>{ this.props.kind }</StyledButton>;
  }
}
