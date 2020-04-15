import styled from 'styled-components';

const StyledGraph = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    height: 100%;

    rect {
      cursor: pointer;
      fill: ${(props): string => props.theme.gray};
    }
  }
`;

export default StyledGraph;
