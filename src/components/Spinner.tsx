import React from 'react';
import StyledSpinner from '@styles/components/Spinner.styled';
import { spinnerPath } from '@utilities/svg';

const Spinner: React.FC = (): JSX.Element =>
  <StyledSpinner>
    <svg className='spinFast' width="206" height="206" viewBox="0 0 206 206">
      <g transform="translate(-404 -749)">
        <g transform="translate(404 749)" fill="none">
          <path d="M103,0A103,103,0,1,1,0,103,103,103,0,0,1,103,0Z" stroke="none" />
          <path d={ spinnerPath } stroke="none" fill="#aaa" />
        </g>
        <path
          d="M0,0V53"
          transform="translate(507.5 799.5)"
          fill="none"
          stroke="#aaa"
          strokeLinecap="round"
          strokeWidth="25"
        />
      </g>
    </svg>
    <svg className='spinSlow' width="206" height="206" viewBox="0 0 206 206">
      <g transform="translate(-404 -749)">
        <g transform="translate(404 749)" fill="none">
          <path d="M103,0A103,103,0,1,1,0,103,103,103,0,0,1,103,0Z" stroke="none" />
          <path d={ spinnerPath } stroke="none" fill="#aaa" />
        </g>
        <path
          d="M0,0,25,25"
          transform="translate(507.5 852.5)"
          fill="none"
          stroke="#aaa"
          strokeLinecap="round"
          strokeWidth="25"
        />
      </g>
    </svg>
  </StyledSpinner>;

export default Spinner;
