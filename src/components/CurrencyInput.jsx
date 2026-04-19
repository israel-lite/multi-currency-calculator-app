import React from 'react';

const CurrencyInput = ({ value, onChange, currencies }) => {
  const selectedCurrency = currencies.find(c => c.code === value);

  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field currency-select appearance-none cursor-pointer hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-200"
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
      
      {/* Custom Dropdown Arrow */}
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Currency Flag and Symbol Display */}
      {selectedCurrency && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 pointer-events-none">
          <img
            src={selectedCurrency.flag}
            alt={`${selectedCurrency.name} flag`}
            className="currency-flag"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {selectedCurrency.symbol}
          </span>
        </div>
      )}
    </div>
  );
};

export default CurrencyInput;
