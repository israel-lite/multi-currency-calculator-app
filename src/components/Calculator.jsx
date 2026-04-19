import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const inputNumber = (num) => {
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 100);
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 100);
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 100);
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const performOperation = (nextOperation) => {
    setButtonPressed(true);
    setTimeout(() => setButtonPressed(false), 100);
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const Button = ({ onClick, className = '', children, ...props }) => (
    <button
      onClick={onClick}
      className={`rounded-xl font-semibold text-lg transition-all duration-150 transform active:scale-90 active:brightness-90 hover:brightness-95 ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Display */}
      <div className={`mb-3 sm:mb-4 p-3 sm:p-4 bg-gray-900 text-white rounded-2xl text-right text-2xl sm:text-3xl font-mono min-h-[70px] sm:min-h-[80px] flex items-center justify-end border-2 shadow-inner transition-all duration-100 ${buttonPressed ? 'border-blue-400 bg-gray-800' : 'border-gray-700'}`}>
        {display}
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {/* First Row */}
        <Button
          onClick={clear}
          className="col-span-2 bg-red-500 hover:bg-red-600 text-white py-3 sm:py-4 shadow-lg border-2 border-red-600 text-sm sm:text-base"
        >
          Clear
        </Button>
        <Button
          onClick={() => performOperation('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 shadow-lg border-2 border-blue-600 text-sm sm:text-base"
        >
          ÷
        </Button>
        <Button
          onClick={() => performOperation('*')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 shadow-lg border-2 border-blue-600 text-sm sm:text-base"
        >
          ×
        </Button>

        {/* Second Row */}
        <Button
          onClick={() => inputNumber(7)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          7
        </Button>
        <Button
          onClick={() => inputNumber(8)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          8
        </Button>
        <Button
          onClick={() => inputNumber(9)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          9
        </Button>
        <Button
          onClick={() => performOperation('-')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 shadow-lg border-2 border-blue-600 text-sm sm:text-base"
        >
          -
        </Button>

        {/* Third Row */}
        <Button
          onClick={() => inputNumber(4)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          4
        </Button>
        <Button
          onClick={() => inputNumber(5)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          5
        </Button>
        <Button
          onClick={() => inputNumber(6)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          6
        </Button>
        <Button
          onClick={() => performOperation('+')}
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 sm:py-4 shadow-lg border-2 border-blue-600 text-sm sm:text-base"
        >
          +
        </Button>

        {/* Fourth Row */}
        <Button
          onClick={() => inputNumber(1)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          1
        </Button>
        <Button
          onClick={() => inputNumber(2)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          2
        </Button>
        <Button
          onClick={() => inputNumber(3)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          3
        </Button>
        <Button
          onClick={() => performOperation('=')}
          className="row-span-2 bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 shadow-lg border-2 border-green-600 text-sm sm:text-base"
        >
          =
        </Button>

        {/* Fifth Row */}
        <Button
          onClick={() => inputNumber(0)}
          className="col-span-2 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          0
        </Button>
        <Button
          onClick={inputDecimal}
          className="bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 sm:py-4 shadow-lg border-2 border-gray-300 text-sm sm:text-base"
        >
          .
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
