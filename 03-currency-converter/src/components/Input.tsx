import React, { useId, useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import "../App.css";


const Input: React.FC = () => {
  const [amount, setAmount] = useState<number>(1)
  const [from, setFrom] = useState<string>('USD')
  const [to, setTo] = useState<string>('INR')
  const [convertedAmount, setConvertedAmount] = useState<number>(1)

  const amountInputId = useId()
  const currencyInfo = useCurrencyInfo()

  if (!currencyInfo) {
    console.log('waiting for data')
    return <p>Loading...</p>
  }

  const options = Object.keys(currencyInfo)

  const handleSwap = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
  }

  const handleConvert = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const rate = currencyInfo[to]
    if (rate) {
      const result = parseFloat((amount * rate).toFixed(2))
      setConvertedAmount(result)
    }
  }

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      <form>
        <label htmlFor={amountInputId}>Amount:</label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <label>From:</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {options.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {options.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <button className="swap-btn" onClick={handleSwap}>
          Swap Currency
        </button>
        <button className="convert-btn" onClick={handleConvert}>
          Convert Currency
        </button>
      </form>

      <h2>Converted Amount: {convertedAmount}</h2>
    </div>
  )
}

export default Input
