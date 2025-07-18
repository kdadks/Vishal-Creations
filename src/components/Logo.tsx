import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  const primaryColor = variant === 'dark' ? '#1e40af' : '#ffffff';
  const secondaryColor = variant === 'dark' ? '#059669' : '#10b981';
  const textColor = variant === 'dark' ? '#1f2937' : '#ffffff';

  return (
    <svg
      className={className}
      viewBox="0 0 300 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Vishal Creations Logo"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      
      {/* Logo Symbol */}
      <g transform="translate(10, 10)">
        {/* Hexagon shape representing plastic molecules */}
        <polygon
          points="30,15 45,7 60,15 60,35 45,43 30,35"
          fill="url(#gradient)"
          stroke={primaryColor}
          strokeWidth="2"
        />
        <polygon
          points="30,15 45,7 60,15 60,35 45,43 30,35"
          fill="none"
          stroke={primaryColor}
          strokeWidth="1"
          opacity="0.3"
        />
        
        {/* Inner design */}
        <circle cx="45" cy="25" r="8" fill={variant === 'dark' ? '#ffffff' : primaryColor} opacity="0.9" />
        <text x="45" y="30" textAnchor="middle" fontSize="12" fill={textColor} fontWeight="bold">V</text>
      </g>
      
      {/* Company Name */}
      <text x="90" y="35" fontSize="24" fontWeight="bold" fill={textColor} fontFamily="Arial, sans-serif">
        VISHAL
      </text>
      <text x="90" y="55" fontSize="16" fill={secondaryColor} fontFamily="Arial, sans-serif">
        CREATIONS
      </text>
      
      {/* Tagline */}
      <text x="90" y="70" fontSize="10" fill={textColor} opacity="0.7" fontFamily="Arial, sans-serif">
        Premium Plastic Raw Materials
      </text>
    </svg>
  );
};