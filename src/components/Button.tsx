import React from 'react';

interface ButtonProps { kind: string }

export class Button extends React.Component <ButtonProps, {}> {
    public render(): JSX.Element { return <button>{ this.props.kind }</button>; }
}