import React from 'react';
import StyledSection from '@styles/components/Section.styled';

type SectionProps = { children: React.ReactNode };

const Section = (props: SectionProps): JSX.Element =>
  <StyledSection>{ props.children }</StyledSection>;

export default Section;
