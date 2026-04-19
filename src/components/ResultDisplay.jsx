import React from 'react';

const ResultDisplay = ({ result, fromCurrency, toCurrency, exchangeRate, formatNumber }) => {
  const formattedResult = formatNumber(result);
  const formattedRate = formatNumber(exchangeRate);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white animate-slide-up">
      {/* Result Amount */}
      <div className="text-center mb-4">
        <div className="text-sm font-medium opacity-90 mb-1">Result</div>
        <div className="text-3xl font-bold animate-pulse-subtle">
          {toCurrency?.symbol || ''} {formattedResult} {toCurrency?.code || ''}
        </div>
      </div>

      {/* Rate Info */}
      <div className="border-t border-white/20 pt-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className="opacity-90">Rate:</span>
            <span className="font-semibold">
              1 {fromCurrency?.code || ''} = {formattedRate} {toCurrency?.code || ''}
            </span>
          </div>
          {fromCurrency && toCurrency && (
            <div className="flex items-center space-x-2">
              <img
                src={fromCurrency.flag}
                alt={fromCurrency.name}
                className="w-5 h-5 rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="opacity-75">to</span>
              <img
                src={toCurrency.flag}
                alt={toCurrency.name}
                className="w-5 h-5 rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Additional Info */}
      {result > 0 && (
        <div className="mt-4 text-xs opacity-75 text-center">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;
