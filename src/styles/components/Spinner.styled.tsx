import styled from 'styled-components';

const StyledSpinner = styled.div`
@keyframes rotateFast {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinFast {
  animation: rotateFast 10s linear infinite;
  position: absolute;
}

.spinSlow {
  animation: rotateFast 30s linear infinite;
}
`;

export default StyledSpinner;
