import React,{ useState } from "react"; 


function Currency ( { selected , setSelected } ) {
  const [ isActive , setIsActive ] = useState(false);
  const options = ["DZD", "AUD", "BHD", "VEF", "VES", "BWP", "BRL", "BND", "CAD", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "HUF", "ISK", "INR", "IDR", "IRR", "ILS", "JPY", "KZT", "KRW", "KWD", "LYD", "MYR", "MUR", "MXN", "NPR", "NZD", "NOK", "OMR", "PKR", "PEN", "PHP", "PLN", "QAR", "RUB", "SAR", "SGD", "ZAR", "LKR", "SEK", "CHF", "THB", "TTD", "TND", "AED", "GBP", "USD", "UYU"];
  return (
    <div className = " dropdown currency col" id="currency">
        <div className = " dropdown-btn" onClick = {() =>setIsActive(!isActive)}>
          {selected}
          <i className = " fa fa-caret-down "></i>
        </div>
        { isActive && (
            <div className = "dropdown-content" >
                {options.map ((option) => (
                    <div onClick={ ()=>{
                        setSelected (option);
                        setIsActive (false);
                        }} 
                        className = " dropdown-item">
                        {option}
                    </div>
                )) }
            </div>
      )}
    </div>
  );
}

export default Currency;