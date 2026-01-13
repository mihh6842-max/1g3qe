import React from 'react';
import '../assets/icons/icons.css';

interface IconProps {
  name: 'training' | 'lectures' | 'courses' | 'training-plan' | 'shop' | 'training-camp' | 'equipment' | 'menu';
  size?: 'sm' | 'md';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 'md', className = '' }) => {
  const containerClass = size === 'sm' ? 'icon-container-sm' : 'icon-container';

  return (
    <div className={`${containerClass} ${className}`}>
      <img
        src={`/src/assets/icons/${name}.svg`}
        alt={name}
        style={{ width: size === 'sm' ? '24px' : '48px', height: size === 'sm' ? '24px' : '48px' }}
      />
    </div>
  );
};

export default Icon;
