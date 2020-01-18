import styled from 'styled-components';

const StyledPieChart = styled.div`
  background: ${(props): string => props.theme.primary};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 25px;
`;

export default StyledPieChart;
