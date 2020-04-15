import React from 'react';
import StyledGraph from '@styles/components/Graph.styled';

const Graph: React.FC = () =>
  <StyledGraph>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
    <svg width='50'><rect id='box' x='0' y='0' width='100%' height='100%' /></svg>
  </StyledGraph>;

export default Graph;
