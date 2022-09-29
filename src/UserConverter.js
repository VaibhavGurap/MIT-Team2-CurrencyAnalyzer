import DatePicker from "react-date-picker";
import Select from "react-select";
import React, { useEffect, useState } from "react";

function UserConverter() {
  const [datePicker, setDatePicker] = useState(new Date());
  const style = { display: "inline-block" };
  const [amount, setAmount] = useState({});
  const [curr1, setCurr1] = useState({});
  const [curr2, setCurr2] = useState({});
  const [convertedAmount, setConvertedAmount] = useState({});
  const handle1 = (event) => {
    setAmount(event.value);
  };
  var date;
  const handleSubmit = (event) => {
    console.log("submit");
    fetch(
      `http://127.0.0.1:8000/currency/converter?date=${date}&curr1=${curr1}&curr2=${curr2}&amount=${amount}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };
  const handle2 = (event) => {
    setCurr1(event.value);
  };
  const handle3 = (event) => {
    setCurr2(event.value);
  };
  const handle4 = (event) => {
    setDatePicker(event.value);
  };
  const handleChange = (event) => {
    //setSelected(event.value);
  };
  const options = [
    { value: "USD", label: "USD" },
    { value: "INR", label: "INR" },
    { value: "AUD", label: "AUD" },
  ];
  return (
    <div>
      <Select options={options} onChange={handleChange}></Select>
      {/* <h4>Select a date</h4>
      <span>
        <input type="date" onChange={handle4}></input>
        <input type="number" onChange={handle1} style={style}></input>
        <select name="curr1" onChange={handle2}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="AUD">AUD</option>
        </select>
        <select name="curr2" onChange={handle3}>
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="AUD">AUD</option>
        </select>
        <input type="submit" onClick={handleSubmit}></input>
      </span> */}
    </div>
  );
}

export default UserConverter;
