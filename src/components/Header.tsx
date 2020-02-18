import React from 'react';
import { Link } from "react-router-dom";
import StyledHeader from '@styles/components/Header.styled';

export const Header = (): JSX.Element =>
  <StyledHeader>
    <h6>TIMEWARD</h6>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
    </nav>
  </StyledHeader>;
