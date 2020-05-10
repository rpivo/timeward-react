import styled from 'styled-components';

type StyledTileProps = { width?: string };

const StyledTile = styled.div<StyledTileProps>`
  background: white;
  border-radius: ${(props): string => props.width === 'full' ? `0` : props.theme.borderRadius};
  box-shadow: ${(props): string => props.theme.shadow};
  display: ${(props): string => props.width === 'full' ? `block` : `inline-block`};
  padding: 10px;
  position: relative;
  margin: 10px;
`;

export default StyledTile;
