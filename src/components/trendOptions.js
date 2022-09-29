import React, { useState } from 'react';
import Select from 'react-select';

function TrendOptions(props) {
    const style = {width:'100px', display:'inline-block',margin:'2%'}
    const currencies = require('../currency.json')
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

