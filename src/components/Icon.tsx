import React from 'react';
import { iconPaths } from '@utilities/svg';

type IconProps = {
  type?: string;
};

const Checkmark: React.FC = (): JSX.Element =>
  <svg width='299.106' height='299.106' viewBox='0 0 299.106 299.106'>
    <path
      d='M113.5,249v-.5H0v-60H113.5V0h60V188.5h.5v60h-.5v.5Z'
      transform='translate(176.07) rotate(45)'
      fill='#00C519'
    />
  </svg>;

const IconX: React.FC = (): JSX.Element =>
  <svg
    style={{ marginBottom: '-0.15rem', marginTop: '0.15rem' }}
    width='218.496'
    height='218.496'
    viewBox='0 0 218.496 218.496'
  >
    <path d={iconPaths.iconX} fill='red' />
  </svg>;

const Icon: React.FC<IconProps> = ({ type }: IconProps): JSX.Element => {
  switch (type) {
    case 'x':
      return <IconX />;
    case 'checkmark':
    default:
      return <Checkmark />;
  }
};

export default Icon;
