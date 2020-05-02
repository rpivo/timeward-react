import styled from 'styled-components';

type StyledButtonProps = { kind: string };

const StyledButton = styled.div<StyledButtonProps>`
  display: inline-block;
  cursor: pointer;
  margin-top: 2px;
  margin-right: ${(props): string => props.kind === 'pause' ? `3px` : `2px`};
  margin-bottom: 2px;
  margin-left: 2px;
  height: 15px;
  width: ${(props): string => props.kind === 'pause' ? `14px` : `15px`};
`;

export default StyledButton;
