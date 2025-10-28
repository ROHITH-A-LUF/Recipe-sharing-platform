import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    |
    ||
  |||
  import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);

  // Simple static exchange rates
  const rates = {
    USD: { INR: 83.0, EUR: 0.92, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, INR: 1 },
    EUR: { USD: 1.09, INR: 90.0, EUR: 1 },
  };

  const convert = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount");
      return;
    }
    const rate = rates[fromCurrency][toCurrency];
    setResult((amount * rate).toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>💱 Simple Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <div style={{ marginTop: "10px" }}>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <span style={{ margin: "0 10px" }}>to</span>

        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={convert}>Convert</button>
      </div>

      {result !== null && (
        <h3 style={{ marginTop: "20px" }}>
          {amount} {fromCurrency} = {result} {toCurrency}
        </h3>
      )}
    </div>
  );
}

export default App;
|
||
|||
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
