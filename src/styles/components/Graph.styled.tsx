import styled from 'styled-components';

const StyledGraph = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  svg {
    height: 100%;
    display: flex;
    flex-direction: column;

    rect {
      cursor: pointer;
      outline: 1px solid green;
    }
  }
`;

export default StyledGraph;
