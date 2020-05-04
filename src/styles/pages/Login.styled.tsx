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
    margin-bottom: 1.6rem;
    color: ${(props): string => props.theme.tertiary};
  }

  hr {
    border: 0;
    border-bottom: 1px solid ${(props): string => props.theme.tertiary};
    width: 268px;
  }

  p.failure {
    color: red;
    font-size: 1.14rem;
    margin-top: 0;
    max-width: 270px;
    text-align: center;
  }

  div.password-requirements {
    margin-top: -0.75rem;
    margin-bottom: 0.75rem;

    svg {
      width: 0.75rem;
      height: auto;
      padding-top: 0.2rem;
      padding-right: 0.2rem;
    }

    p {
      color: ${(props): string => props.theme.primary};
      margin: 0;
      margin-bottom: 0.3rem;
      font-size: 0.67rem;
    }
  }
`;

export default StyledLogin;
