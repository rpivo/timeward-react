import styled from 'styled-components';

type StyledAlignmentProps = {
  vertical?: boolean;
  horizontal?: boolean;
};

const StyledAlignment = styled.div<StyledAlignmentProps>`
  display: flex;
  justify-content: ${(props): string => props.horizontal ? `center` : `normal`};
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: ${(props): string => props.vertical ? `center` : `normal`};
  }
`;

export default StyledAlignment;
