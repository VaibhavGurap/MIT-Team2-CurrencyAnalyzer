import React,{useState,useEffect} from "react";
import LiveConverter from "./LiveConverter";
import axios from "axios";

function ConvertLive(){
    const BASE_URL='https://api.apilayer.com/fixer/latest?base=USD&apikey=pJEvMSA67GKqUN3n5guMKB7hGs5A8GKn';
    // const BASE_URL='https://api.apilayer.com/fixer/latest?base=USD&apikey=4PE3J560jiX9ZWipwoFiWCL5jxLB1K9n';

    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('INR');
    const [rates, setRates] = useState([]);

    useEffect(()=>{
        axios.get(BASE_URL)
        .then(response => {
            setRates(response.data.rates);
          })
    },[]);

    useEffect(() => {
        if (!!rates) {
          function init() {
            handelAmount1Change(1);
          }
          init();
        }
      }, [rates]);

    function format(number) {
        return number.toFixed(4);
      }

    function handelAmount1Change(amount1){

        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }
    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
      }
    
      function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
      }
    
      function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
      }

      


    return(
        <div >
            <LiveConverter className="liveConverter"
                currencies={Object.keys(rates)} 
                amount={amount1} 
                currency={currency1}
                onAmountChange={handelAmount1Change}
                onCurrencyChange={handleCurrency1Change}
            />
            <LiveConverter className="liveConverter"
                currencies={Object.keys(rates)}
                amount={amount2} 
                currency={currency2}
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
            />
        </div>
    );
}

export default ConvertLive;