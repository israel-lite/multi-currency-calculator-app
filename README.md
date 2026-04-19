# Eazee Calc - Easy Calculator & Currency Converter

A beautiful, responsive web application that combines a standard calculator with a powerful currency converter. Perfect for everyday calculations and international currency conversions.

## Features

- **Dual Mode Calculator**: Switch between normal calculator and currency converter
- **Custom Exchange Rates**: Set your own exchange rates for accurate conversions
- **Calculation History**: Save and reuse recent calculations
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Beautiful UI**: Professional navy blue theme with vibrant, colorful text
- **Local Storage**: Saves your preferences and history

## Tech Stack

- **React 18.2.0** - Modern JavaScript framework
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Create React App 5.0.1** - React scaffolding tool
- **LocalStorage API** - Client-side data persistence

## Live Demo

[Deploy your app on Vercel and add the link here]

## Getting Started

### Prerequisites

- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eazee-calc.git
cd eazee-calc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect it's a React app and deploy it

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting service

## Usage

### Calculator Mode
- Perform basic math operations (+, -, ×, ÷)
- Clear button to reset calculations
- Visual feedback when buttons are pressed

### Currency Converter Mode
- Enter amount to convert
- Select from and to currencies
- Set custom exchange rates
- Save calculations to history
- Reuse previous conversions with one click

## Project Structure

```
src/
  components/
    Calculator.jsx          # Normal calculator component
    CurrencyInput.jsx       # Currency selector dropdown
    EazeeCalcLogo.jsx       # Custom logo component
    CalculationHistory.jsx  # History panel
    ResultDisplay.jsx       # Conversion results display
    SwapButton.jsx          # Currency swap button
  App.js                   # Main application component
  index.css                # Global styles and Tailwind
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Made with Love for YouTube Audience! 

Perfect for tutorials, demonstrations, and showcasing modern web development skills.