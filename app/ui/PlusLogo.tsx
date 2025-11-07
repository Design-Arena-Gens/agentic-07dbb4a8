import React, { forwardRef } from 'react';

const PlusLogo = forwardRef<SVGSVGElement, {}>(function PlusLogo(_, ref) {
  return (
    <svg
      ref={ref}
      width="880"
      height="300"
      viewBox="0 0 880 300"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Plus logo"
    >
      <defs>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#12c2e9" />
          <stop offset="50%" stopColor="#c471ed" />
          <stop offset="100%" stopColor="#f64f59" />
        </linearGradient>

        <linearGradient id="shapeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>

        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <clipPath id="wordClip">
          <text x="210" y="200" fontFamily="Manrope, system-ui, -apple-system, Segoe UI, Roboto" fontWeight="800" fontSize="180" letterSpacing="2">Plus</text>
        </clipPath>
      </defs>

      {/* Subtle background grid of plus signs */}
      <g opacity="0.14">
        {Array.from({ length: 11 }).map((_, row) => (
          <g key={row}>
            {Array.from({ length: 24 }).map((__, col) => {
              const x = 20 + col * 36;
              const y = 20 + row * 26;
              const rot = (row * 24 + col * 9) % 360;
              return (
                <g key={col} transform={`translate(${x} ${y}) rotate(${rot})`}>
                  <rect x="-2" y="-8" width="4" height="16" rx="1.5" fill="#fff" />
                  <rect x="-8" y="-2" width="16" height="4" rx="1.5" fill="#fff" />
                </g>
              );
            })}
          </g>
        ))}
      </g>

      {/* Hero plus glyph behind the P */}
      <g transform="translate(90 60)" filter="url(#softGlow)">
        <g className="plus-hero">
          <rect x="58" y="0" width="24" height="140" rx="12" fill="url(#shapeGrad)" />
          <rect x="0" y="58" width="140" height="24" rx="12" fill="url(#shapeGrad)" />
        </g>
      </g>

      {/* Wordmark with gradient fill */}
      <g>
        <text
          x="210"
          y="200"
          fontFamily="Manrope, system-ui, -apple-system, Segoe UI, Roboto"
          fontWeight="800"
          fontSize="180"
          letterSpacing="2"
          fill="url(#textGrad)"
        >
          Plus
        </text>

        {/* Animated gradient sheen sweeping through the letters via clip */}
        <g clipPath="url(#wordClip)">
          <rect className="sheen" x="-400" y="0" width="400" height="300" fill="#ffffff" opacity="0.18" />
        </g>
      </g>

      <style>{`
        /* Animate subtle sweep */
        .sheen {
          transform: translateX(0);
          animation: sweep 4.8s ease-in-out infinite;
        }
        @keyframes sweep {
          0% { transform: translateX(-420px) rotate(8deg); opacity: 0; }
          10% { opacity: 0.18; }
          50% { transform: translateX(1080px) rotate(8deg); opacity: 0.18; }
          60% { opacity: 0; }
          100% { transform: translateX(1080px) rotate(8deg); opacity: 0; }
        }
      `}</style>
    </svg>
  );
});

export default PlusLogo;
