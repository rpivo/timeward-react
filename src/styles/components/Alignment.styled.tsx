import styled from 'styled-components';

type StyledAlignmentProps = {
  vertical?: boolean;
  horizontal?: boolean;
};

const StyledAlignment = styled.div<StyledAlignmentProps>`
  display: flex;
  justify-content: ${(props): string => props.horizontal ? `center` : `normal`};
  position: ${(props): string => props.vertical ? `absolute` : `relative`};
  top: ${(props): string => props.vertical ? `0` : `initial`};
  right: ${(props): string => props.horizontal ? `0` : `initial`};
  bottom:  ${(props): string => props.vertical ? `0` : `initial`};
  left: ${(props): string => props.horizontal ? `0` : `initial`};

  div {
    display: flex;
    flex-direction: ${(props): string => props.vertical ? `column` : `row`};
    justify-content: ${(props): string => props.vertical ? `center` : `normal`};
  }
`;

export default StyledAlignment;
