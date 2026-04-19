import React from 'react';

const CalculationHistory = ({ history, onReuse, onClear }) => {
  if (!history.length) {
    return (
      <div className="history-panel mt-6 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold italic text-orange-500 dark:text-orange-400">History</h2>
            <p className="text-xs font-bold italic text-purple-600 dark:text-purple-400">
              Saved conversions will appear here.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="history-panel mt-6 p-4">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-sm font-bold italic text-orange-500 dark:text-orange-400">History</h2>
          <p className="text-xs font-bold italic text-purple-600 dark:text-purple-400">
            Reuse a previous conversion in one click.
          </p>
        </div>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-medium text-red-500 hover:text-red-400 transition-colors"
        >
          Clear
        </button>
      </div>

      <div className="space-y-3">
        {history.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => onReuse(entry)}
            className="history-item w-full text-left rounded-xl p-3 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold italic text-pink-600 dark:text-pink-400">
                {entry.amount} {entry.fromCurrency} to {entry.toCurrency}
              </span>
              <span className="text-sm font-bold italic text-green-600 dark:text-green-400">
                {entry.result}
              </span>
            </div>
            <div className="mt-1 text-xs font-bold italic text-orange-600 dark:text-orange-400">
              Rate: 1 {entry.fromCurrency} = {entry.exchangeRate} {entry.toCurrency}
            </div>
            <div className="mt-1 text-[11px] font-bold italic text-purple-500 dark:text-purple-400">
              {entry.timestamp}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculationHistory;
