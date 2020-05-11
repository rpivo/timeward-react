import React from 'react';
import StyledAlignment from '@styles/components/Alignment.styled';

type AlignmentProps = {
  readonly children: React.ReactNode;
  readonly overlay?: boolean;
  readonly vertical?: boolean;
  readonly horizontal?: boolean;
};

const Alignment: React.FC<AlignmentProps> =
  ({ children, overlay, vertical, horizontal }: AlignmentProps): JSX.Element =>
    <StyledAlignment overlay={overlay} vertical={vertical} horizontal={horizontal}>
      <div>{children}</div>
    </StyledAlignment>;

export default Alignment;
