import styled from 'styled-components';

type StyledAlignmentProps = {
  readonly overlay?: boolean;
  readonly vertical?: boolean;
  readonly horizontal?: boolean;
};

const StyledAlignment = styled.div<StyledAlignmentProps>`
  background: ${(props): string => props.overlay ? 'rgba(0, 0, 0, 0.75)' : 'none'};
  display: flex;
  justify-content: ${(props): string => props.horizontal ? 'center' : 'normal'};
  position: ${(props): string =>
    props.overlay ? 'fixed' : props.vertical ? 'absolute' : 'relative'};
  top: ${(props): string => props.vertical ? '0' : 'initial'};
  right: ${(props): string => props.horizontal ? '0' : 'initial'};
  bottom:  ${(props): string => props.vertical ? '0' : 'initial'};
  left: ${(props): string => props.horizontal ? '0' : 'initial'};
  z-index: ${(props): string => props.overlay ? '2' : '0'};

  div {
    display: flex;
    flex-direction: ${(props): string => props.vertical ? 'column' : 'row'};
    justify-content: ${(props): string => props.vertical ? 'center' : 'normal'};
  }
`;

export default StyledAlignment;
