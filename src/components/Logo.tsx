import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { width: 120, height: 48 },
    md: { width: 155, height: 62 },
    lg: { width: 190, height: 76 },
  }[size];

  return (
    <div className={`flex items-center select-none ${className}`} id="dayana-brand-logo">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-10 md:h-12"
      >
        {/* Tall calligraphic stylized 'N' exactly matching user's image */}
        <g stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
          {/* Main continuous stroke for the artistic tall N */}
          <path
            d="M 22 70 L 22 39 C 22 35.5 24.5 35 27.5 39 L 47 70 C 48.2 72 50 71 50 68.5 L 43.5 7.5 C 43.2 5 42 5 41 6"
            strokeWidth="3.6"
            fill="none"
          />
        </g>

        {/* Clean, modern, condensed 'DAYANA' aligned to baseline */}
        <text
          x="58"
          y="69"
          fill="#FFFFFF"
          fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="29"
          fontWeight="400"
          letterSpacing="0.10em"
        >
          DAYANA
        </text>
      </svg>
    </div>
  );
};
