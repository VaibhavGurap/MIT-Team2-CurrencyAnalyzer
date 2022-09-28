import React from 'react'
import Select from 'react-select';

export default function TrendOptions(props) {
    const style = {width:'100px'}
    const currencies = [
        { label: 'USD', value: 'USD' },
        { label: 'INR', value: 'INR' },
        { label: 'YEN', value: 'YEN' },
        { label: 'AUD', value: 'AUD' },
        { label: 'PND', value: 'PND' },
        { label: 'DNR', value: 'DNR' },
      ];
  return (
    <div style={style}>
        <Select options={currencies} 
        maxMenuHeight="150px" 
        value={{label:'USD', value:'USD'}}
        onChange = {value => props.input.onChange(value)}></Select>
    </div>
  )
}
export {TrendOptions}

