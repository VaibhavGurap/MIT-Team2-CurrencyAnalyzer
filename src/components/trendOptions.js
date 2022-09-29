import React, { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";

export default function TrendOptions(props) {
  const style = { width: "100px", display:'inline-block', margin:'2%' };
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/currency/")
      .then((response) => response.json())
      .then((json) => setCurrency(json["currencies"]));
  }, []);

  const currencies = [];
  for (let it = 0; it < currency.length; it++) {
    currencies.push({ label: currency[it], value: currency[it] });
  }

  return (
    <div style={style}>
      <Select
        options={currencies}
        maxMenuHeight="150px"
        value={{ label: "USD", value: "USD" }}
        onChange={(value) => props.input.onChange(value)}
      ></Select>
    </div>
  );
}
export { TrendOptions };