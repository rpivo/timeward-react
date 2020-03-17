import React from 'react';
import StyledTile from '@styles/components/Tile.styled';

type TileProps = {
  children: React.ReactNode;
  width?: string;
};

const Tile: React.FC<TileProps> = ({ children, width }: TileProps): JSX.Element =>
  <StyledTile width={width}>{ children }</StyledTile>;

export default Tile;
