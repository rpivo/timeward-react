import styled from 'styled-components';

const StyledHeader = styled.header`
  width: calc(100% - 16px);
  background: #345;
  color: white;
  padding: 8px;
  display: flex;
  justify-content: space-between;

  h6 {
    letter-spacing: 0.25rem;
    margin: 0.2rem;
  }

  nav a {
    text-decoration: none;
    color: white;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

export default StyledHeader;
