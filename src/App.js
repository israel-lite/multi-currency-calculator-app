import React, { useState, useEffect } from 'react';
import CurrencyInput from './components/CurrencyInput';
import ResultDisplay from './components/ResultDisplay';
import SwapButton from './components/SwapButton';
import CalculationHistory from './components/CalculationHistory';
import Calculator from './components/Calculator';
import EazeeCalcLogo from './components/EazeeCalcLogo';

const CURRENCIES = [
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', flag: 'https://flagcdn.com/w40/ng.png' },
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: 'https://flagcdn.com/w40/eu.png' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: 'https://flagcdn.com/w40/jp.png' }
];

const STORAGE_KEY = 'currency-converter-data';
const MAX_HISTORY_ITEMS = 8;

function App() {
  const [amount, setAmount] = useState('100');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [exchangeRate, setExchangeRate] = useState('1500');
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);
  const [calculatorMode, setCalculatorMode] = useState('normal'); // 'normal' or 'currency'

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setAmount(parsed.amount || '100');
        setFromCurrency(parsed.fromCurrency || 'USD');
        setToCurrency(parsed.toCurrency || 'NGN');
        setExchangeRate(parsed.exchangeRate || '1500');
        setDarkMode(parsed.darkMode || false);
        setHistory(Array.isArray(parsed.history) ? parsed.history : []);
        setCalculatorMode(parsed.calculatorMode || 'normal');
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    const dataToSave = {
      amount,
      fromCurrency,
      toCurrency,
      exchangeRate,
      darkMode,
      history,
      calculatorMode
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [amount, fromCurrency, toCurrency, exchangeRate, darkMode, history, calculatorMode]);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const calculateResult = () => {
    const amountNum = parseFloat(amount) || 0;
    const rateNum = parseFloat(exchangeRate) || 0;
    return amountNum * rateNum;
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(num);
  };

  const saveToHistory = () => {
    const amountNum = parseFloat(amount);
    const rateNum = parseFloat(exchangeRate);

    if (!amountNum || !rateNum) {
      return;
    }

    const entry = {
      id: `${Date.now()}-${fromCurrency}-${toCurrency}`,
      amount,
      fromCurrency,
      toCurrency,
      exchangeRate,
      result: formatNumber(amountNum * rateNum),
      timestamp: new Date().toLocaleString()
    };

    setHistory((currentHistory) => [entry, ...currentHistory].slice(0, MAX_HISTORY_ITEMS));
  };

  const restoreHistoryEntry = (entry) => {
    setAmount(entry.amount);
    setFromCurrency(entry.fromCurrency);
    setToCurrency(entry.toCurrency);
    setExchangeRate(entry.exchangeRate);
  };

  const result = calculateResult();
  const fromCurrencyData = CURRENCIES.find(c => c.code === fromCurrency);
  const toCurrencyData = CURRENCIES.find(c => c.code === toCurrency);

  return (
    <div className={`min-h-screen gradient-bg transition-all duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Mode Toggle Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          {/* Calculator Mode Toggle */}
          <button
            onClick={() => setCalculatorMode(calculatorMode === 'normal' ? 'currency' : 'normal')}
            className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm transition-all duration-200 shadow-lg border-2 border-blue-800 transform active:scale-95"
            aria-label="Toggle calculator mode"
          >
            {calculatorMode === 'normal' ? 'Currency Mode' : 'Calculator Mode'}
          </button>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        </div>

        {/* Main Card */}
        <div className="glass-card w-full max-w-md mx-auto p-4 sm:p-6 md:p-8 animate-fade-in min-h-[500px]">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
              <EazeeCalcLogo size={40} />
              <h1 className="text-2xl sm:text-3xl font-bold italic text-orange-500 dark:text-orange-400 text-center">
                Eazee Calc
              </h1>
            </div>
            <h2 className="text-lg sm:text-xl font-bold italic text-pink-600 dark:text-pink-400 mb-2 text-center">
              {calculatorMode === 'normal' ? 'Calculator' : 'Currency Converter'}
            </h2>
            <p className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-bold italic text-center px-2">
              {calculatorMode === 'normal' ? 'Standard calculator for basic math operations' : 'Convert between currencies with custom rates'}
            </p>
          </div>

          {/* Calculator Content */}
          {calculatorMode === 'normal' ? (
            <Calculator />
          ) : (
            <>
              {/* Amount Input */}
              <div className="mb-6">
                <label className="block text-sm font-bold italic text-orange-600 dark:text-orange-400 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="input-field text-2xl font-semibold text-center"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                />
              </div>

              {/* From Currency */}
              <div className="mb-4">
                <label className="block text-sm font-bold italic text-purple-600 dark:text-purple-400 mb-2">
                  From
                </label>
                <CurrencyInput
                  value={fromCurrency}
                  onChange={setFromCurrency}
                  currencies={CURRENCIES}
                />
              </div>

              {/* Swap Button */}
              <div className="flex justify-center my-4">
                <SwapButton onSwap={handleSwap} />
              </div>

              {/* To Currency */}
              <div className="mb-6">
                <label className="block text-sm font-bold italic text-pink-600 dark:text-pink-400 mb-2">
                  To
                </label>
                <CurrencyInput
                  value={toCurrency}
                  onChange={setToCurrency}
                  currencies={CURRENCIES}
                />
              </div>

              {/* Exchange Rate */}
              <div className="mb-6">
                <label className="block text-sm font-bold italic text-green-600 dark:text-green-400 mb-2">
                  Exchange Rate
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={exchangeRate}
                    onChange={(e) => setExchangeRate(e.target.value)}
                    className="input-field"
                    placeholder="Enter rate"
                    min="0"
                    step="0.0001"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 dark:text-gray-400">
                    1 {fromCurrency} = ? {toCurrency}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={saveToHistory}
                className="w-full rounded-xl bg-blue-700 text-white py-3 font-semibold hover:bg-blue-800 transition-all duration-200 shadow-lg border-2 border-blue-800 transform active:scale-95"
              >
                Save Calculation
              </button>

              {/* Result Display */}
              <div className="mt-6">
                <ResultDisplay
                  result={result}
                  fromCurrency={fromCurrencyData}
                  toCurrency={toCurrencyData}
                  exchangeRate={parseFloat(exchangeRate) || 0}
                  formatNumber={formatNumber}
                />
              </div>

              <CalculationHistory
                history={history}
                onReuse={restoreHistoryEntry}
                onClear={() => setHistory([])}
              />
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/80 text-sm">
          <p>Eazee Calc • {calculatorMode === 'normal' ? 'Basic math operations' : 'Manual conversion history'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
