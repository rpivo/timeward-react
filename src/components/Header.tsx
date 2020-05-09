import React from 'react';
import { Link } from "react-router-dom";
import StyledHeader from '@styles/components/Header.styled';

type HeaderProps = {
  readonly isAuthorized: boolean;
};

const Header: React.FC<HeaderProps> = ({ isAuthorized }: HeaderProps): JSX.Element =>
  <StyledHeader>
    <h6><Link to='/dashboard'>TIMEWARD</Link></h6>
    <nav>
      {isAuthorized && <Link to='/dashboard'>Dashboard</Link>}
      <Link to='/login'>{isAuthorized ? 'Logout' : 'Login'}</Link>
    </nav>
  </StyledHeader>;

export default Header;
