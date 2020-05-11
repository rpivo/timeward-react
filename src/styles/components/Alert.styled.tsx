import styled from 'styled-components';

const StyledAlert = styled.div`
  background: white;
  border-radius: ${(props): string => props.theme.borderRadius};
  box-shadow: ${(props): string => props.theme.shadow};
  z-index: 1;
  padding: 1rem;
`;

export default StyledAlert;
