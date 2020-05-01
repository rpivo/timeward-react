import styled from 'styled-components';

const StyledLogin = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: -0.25rem;
    letter-spacing: 0.25rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${(props): string => props.theme.primary};
  }

  h2 {
    font-size: 0.64rem;
    letter-spacing: 0.25rem;
    margin-top: -0.25rem;
    margin-bottom: 1.5rem;
    color: ${(props): string => props.theme.tertiary};
  }

  hr {
    border: 0;
    border-bottom: 1px solid ${(props): string => props.theme.tertiary};
    width: 268px;
  }

  p {
    color: red;
    font-size: 1.14rem;
    margin-top: 0;
    text-align: center;
  }
`;

export default StyledLogin;
