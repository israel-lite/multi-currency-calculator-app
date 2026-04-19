import React from 'react';

const EazeeCalcLogo = ({ size = 40, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <circle cx="50" cy="50" r="45" fill="#1e3a8a" stroke="#1e40af" strokeWidth="2"/>
      
      {/* Calculator icon */}
      <rect x="20" y="25" width="35" height="40" rx="4" fill="none" stroke="#f97316" strokeWidth="2"/>
      
      {/* Calculator screen */}
      <rect x="24" y="29" width="27" height="10" rx="2" fill="#fbbf24"/>
      
      {/* Calculator buttons */}
      <circle cx="29" cy="45" r="2" fill="#a855f7"/>
      <circle cx="37.5" cy="45" r="2" fill="#a855f7"/>
      <circle cx="46" cy="45" r="2" fill="#a855f7"/>
      <circle cx="29" cy="52" r="2" fill="#ec4899"/>
      <circle cx="37.5" cy="52" r="2" fill="#ec4899"/>
      <circle cx="46" cy="52" r="2" fill="#ec4899"/>
      <circle cx="29" cy="59" r="2" fill="#10b981"/>
      <circle cx="37.5" cy="59" r="2" fill="#10b981"/>
      <circle cx="46" cy="59" r="2" fill="#10b981"/>
      
      {/* Currency symbol */}
      <text x="65" y="45" fontSize="18" fontWeight="bold" fill="#f97316" fontFamily="Arial">$</text>
      <text x="65" y="60" fontSize="14" fontWeight="bold" fill="#a855f7" fontFamily="Arial">¥</text>
      <text x="65" y="75" fontSize="16" fontWeight="bold" fill="#ec4899" fontFamily="Arial">£</text>
      
      {/* Brand name */}
      <text x="50" y="88" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial">EAZEE CALC</text>
    </svg>
  );
};

export default EazeeCalcLogo;
