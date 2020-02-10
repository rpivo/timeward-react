import React from 'react';
import StyledPage from '@styles/components/Page.styled';

type PageProps = { children: React.ReactNode };

export const Page = (props: PageProps): JSX.Element =>
  <StyledPage>{ props.children }</StyledPage>;
