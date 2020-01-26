import React from 'react';
import StyledTile from '@styles/components/Tile.styled';

type TileProps = { children: React.ReactNode };
export const Tile = (props: TileProps): JSX.Element => <StyledTile>{ props.children }</StyledTile>;
