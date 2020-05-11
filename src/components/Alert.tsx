import React from 'react';
import Alignment from '@components/Alignment';
import StyledAlert from '@styles/components/Alert.styled';

type AlertProps = {
  readonly setShouldDisplayLogoutAlert: (arg: boolean) => void;
  readonly setIsAuthorized: (arg: boolean) => void;
};

const Alert: React.FC<AlertProps> =
  ({ setIsAuthorized, setShouldDisplayLogoutAlert }: AlertProps): JSX.Element => {
    const handleYes = (): void => {
      setShouldDisplayLogoutAlert(false);
      setIsAuthorized(false);
    };

    const handleNo = (): void => setShouldDisplayLogoutAlert(false);

    return (
      <Alignment overlay horizontal vertical>
        <StyledAlert>
          <h2>Are you sure you want to log out?</h2>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </StyledAlert>
      </Alignment>
    );
  };

export default Alert;
