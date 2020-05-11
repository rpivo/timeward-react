import React from 'react';
import { Link } from "react-router-dom";
import StyledHeader from '@styles/components/Header.styled';

type HeaderProps = {
  readonly isAuthorized: boolean;
  readonly setShouldDisplayLogoutAlert: (arg: boolean) => void;
};

const Header: React.FC<HeaderProps> =
  ({ isAuthorized, setShouldDisplayLogoutAlert }: HeaderProps): JSX.Element => {
    const handleLogout = (): void => setShouldDisplayLogoutAlert(true);

    return (
      <StyledHeader>
        <h6><Link to='/dashboard'>TIMEWARD</Link></h6>
        <nav>
          {isAuthorized &&
            <>
              <Link to='/dashboard'>Dashboard</Link>
              <a href='#logout' onClick={handleLogout}>Logout</a>
            </>
          }
          {!isAuthorized && <Link to='/login'>Login</Link>}
        </nav>
      </StyledHeader>
    );
  };

export default Header;
