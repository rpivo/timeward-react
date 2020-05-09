import React from 'react';
import StyledSection from '@styles/components/Section.styled';

type SectionProps = {
  readonly children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }: SectionProps): JSX.Element =>
  <StyledSection>{ children }</StyledSection>;

export default Section;
