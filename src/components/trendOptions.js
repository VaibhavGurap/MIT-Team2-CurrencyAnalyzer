import React, { useState } from "react";
import { useEffect } from "react";
import Select from "react-select";

function fetchValues(curr1, curr2, year) {
  console.log(curr1 + " " + curr2 + " " + year);
}
function TrendOptions(props) {
  const daily = props.daily;
  console.log(daily);
  const style = { width: "100px", display: "inline-block", margin: "2%" };
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/currency/")
      .then((response) => response.json())
      .then((json) => setCurrency(json["currencies"]));
  }, []);

  const currencies = [];
  for (let it = 0; it < currency.length; it++) {
    currencies.push({ label: currency[it], value: currency[it] });
  }
  const [selected, setSelected] = useState("USD");
  const [selected1, setSelected1] = useState("INR");
  const [year, setYear] = useState("2012");
  const handleChange = (event) => {
    setSelected(event.value);
    fetchValues(event.value, selected1, year);
  };
  const handleChange1 = (event) => {
    setSelected1(event.value);
    fetchValues(selected, event.value, year);
  };
  const years = [
    { label: "2012", value: "2012" },
    { label: "2013", value: "2013" },
    { label: "2014", value: "2014" },
    { label: "2015", value: "2015" },
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
  ];

  const handleChange2 = (event) => {
    setYear(event.value);
    fetchValues(selected, selected1, event.value);
  };
  return (
    <div className="row">
      <div className="col-4">
        <Select
          options={currencies}
          placeholder="USD"
          maxMenuHeight="150px"
          onChange={handleChange}
        ></Select>
      </div>
      <div className="col-4">
        <Select
          options={currencies}
          placeholder="INR"
          maxMenuHeight="150px"
          onChange={handleChange1}
        ></Select>
      </div>
      <div className="col-4">
        <Select
          options={years}
          placeholder="2012"
          maxMenuHeight="150px"
          onChange={handleChange2}
        ></Select>
      </div>
    </div>
  );
}
export { TrendOptions };
