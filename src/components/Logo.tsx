import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img
      src="/Logo2.png"
      alt="Vishal Creations Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};