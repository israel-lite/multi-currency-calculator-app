import React from 'react';

const SwapButton = ({ onSwap }) => {
  return (
    <button
      onClick={onSwap}
      className="group relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-full p-3 hover:bg-white/30 hover:scale-110 transition-all duration-200 hover:shadow-lg"
      aria-label="Swap currencies"
    >
      {/* Swap Icon */}
      <svg
        className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:rotate-180 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
        />
      </svg>

      {/* Hover Effect Ring */}
      <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-200" />
    </button>
  );
};

export default SwapButton;
