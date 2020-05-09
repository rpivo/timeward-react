import React from 'react';
import StyledAlignment from '@styles/components/Alignment.styled';

type AlignmentProps = {
  readonly children: React.ReactNode;
  readonly vertical?: boolean;
  readonly horizontal?: boolean;
};

const Alignment: React.FC<AlignmentProps> =
  ({ children, vertical, horizontal }: AlignmentProps): JSX.Element =>
    <StyledAlignment vertical={ vertical } horizontal={ horizontal }>
      <div>{ children }</div>
    </StyledAlignment>;

export default Alignment;
