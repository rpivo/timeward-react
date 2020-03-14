import styled from 'styled-components';

type StyledTileProps = { width?: string };

const StyledTile = styled.div<StyledTileProps>`
  background: white;
  border-radius: ${(props): string => props.width === 'full' ? `0` : `5px`};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: ${(props): string => props.width === 'full' ? `block` : `inline-block`};
  padding: 10px;
  position: relative;
  margin: 10px;
`;

export default StyledTile;
