import styled from 'styled-components';

type StyledTileProps = { width?: string };

const StyledTile = styled.div<StyledTileProps>`
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  padding: 10px;
  display ${(props): string => props.width === 'full' ? `block` : `inline-block`};
`;

export default StyledTile;
