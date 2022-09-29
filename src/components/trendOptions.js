import React, { useState } from 'react';
import Select from 'react-select';

function TrendOptions(props) {
    const style = {width:'100px', display:'inline-block',margin:'2%'}
    const currencies = ["DZD", "AUD", "BHD", "VEF", "VES", "BWP", "BRL", "BND", "CAD", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "HUF", "ISK", "INR", "IDR", "IRR", "ILS", "JPY", "KZT", "KRW", "KWD", "LYD", "MYR", "MUR", "MXN", "NPR", "NZD", "NOK", "OMR", "PKR", "PEN", "PHP", "PLN", "QAR", "RUB", "SAR", "SGD", "ZAR", "LKR", "SEK", "CHF", "THB", "TTD", "TND", "AED", "GBP", "USD", "UYU"]
    const label = ['value','label']
    const options = [
      { value: 'USD', label: 'USD' },
      { value: 'INR', label: 'INR' },
      { value: 'AUD', label: 'AUD' }
    ]

    var [currency,setVal] = useState('')
    const handleChange = event =>{
      setVal(currency=event.value)
      //console.log(curr);
    };

  return (
    <div style={style}>
        <Select 
          options={options}
          maxMenuHeight="150px" 
          onChange={handleChange}>
          </Select>
    </div>
  )
}
export {TrendOptions}

