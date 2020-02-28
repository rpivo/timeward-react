import React from 'react';
import StyledAlignment from '@styles/components/Alignment.styled';

type AlignmentDivProps = {
  children: React.ReactNode;
  vertical?: boolean;
  horizontal?: boolean;
};

const Alignment = (props: AlignmentDivProps): JSX.Element =>
  <StyledAlignment vertical={props.vertical} horizontal={props.horizontal}>
    <div>{ props.children }</div>
  </StyledAlignment>;

export default Alignment;
