import React from 'react';
import StyledPage from '@styles/components/Page.styled';

type PageProps = { children: React.ReactNode };

const Page = (props: PageProps): JSX.Element =>
  <StyledPage>{ props.children }</StyledPage>;

export default Page;
