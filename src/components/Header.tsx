import React from 'react';
import { Link } from "react-router-dom";
import StyledHeader from '@styles/components/Header.styled';

const Header = (): JSX.Element =>
  <StyledHeader>
    <h6><Link to="/dashboard">TIMEWARD</Link></h6>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  </StyledHeader>;

export default Header;
