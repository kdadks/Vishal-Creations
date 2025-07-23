import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img
      src="/New Logo.jpeg"
      alt="Vishal Creations Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};