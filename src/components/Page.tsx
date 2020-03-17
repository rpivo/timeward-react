import React from 'react';
import StyledPage from '@styles/components/Page.styled';

type PageProps = { children: React.ReactNode };

const Page: React.FC<PageProps> = ({ children }: PageProps): JSX.Element =>
  <StyledPage>{ children }</StyledPage>;

export default Page;
