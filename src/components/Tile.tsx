import React from 'react';
import StyledTile from '@styles/components/Tile.styled';

type TileProps = {
  children: React.ReactNode;
  width?: string;
};

export const Tile = (props: TileProps): JSX.Element =>
  <StyledTile width={props.width}>{ props.children }</StyledTile>;
