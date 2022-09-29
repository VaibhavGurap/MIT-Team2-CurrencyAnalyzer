import React, { useState } from "react";
import ConvertLive from "./ConvertLive";
import UserConverter from "./UserConverter";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import Data from "./data";
import Year from "./Year";
import Currency from "./Currency";
import { TrendOptions } from "./components/trendOptions";

function App() {
  const [selected, setSelected] = useState("2012"); //selects the year
  //const [currency1, setCurrency1] = useState("from");
  //const [currency2, setCurrency2] = useState("to");

  const [daily, setDaily] = useState(true);
  const [weekly, setWeekely] = useState(false);
  const [monthly, setMonthly] = useState(false);

  const [graphChoice, setGraphChoice] = useState(true);

  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.date),
    datasets: [
      {
        label: "Exchange Rates",
        data: Data.map((data) => data.INR),
        backgroundColor: ["black", "red", "blue"],
      },
    ],
  });

  const [UserChoice, setChoice] = useState(true);

  return (
    <div className="major ">
      <div className="container">
        <div className="row drop">
          <div className="col-4">
            <TrendOptions daily={daily} />
          </div>
        </div>
        <div className="row">
          <div className="chart col graph">
            {graphChoice ? (
              <LineChart chartData={userData} />
            ) : (
              <BarChart chartData={userData} />
            )}

            <div className="dwm">
              <button
                onClick={() => {
                  setDaily(true);
                  setWeekely(false);
                  setMonthly(false);
                }}
              >
                D
              </button>
              <button
                onClick={() => {
                  setDaily(false);
                  setWeekely(true);
                  setMonthly(false);
                }}
              >
                W
              </button>
              <button
                onClick={() => {
                  setDaily(false);
                  setWeekely(false);
                  setMonthly(true);
                }}
              >
                M
              </button>
            </div>

            <button onClick={() => setGraphChoice(true)}>
              <i class="fa fa-area-chart"></i>
            </button>
            <button onClick={() => setGraphChoice(false)}>
              <i class="fa fa-bar-chart"></i>
            </button>
          </div>

          <div className="chart col graph">
            {/* <HighLow curr={currency1}/> */}
          </div>
        </div>
      </div>

      <div className="converter">
        <button
          onClick={() => {
            setChoice(false);
          }}
          className="btn btn-primary"
        >
          Custom
        </button>
        <button
          onClick={() => {
            setChoice(true);
          }}
          className="btn btn-primary"
        >
          Live
        </button>
        <div>{UserChoice ? <ConvertLive /> : <UserConverter />}</div>
      </div>
    </div>
  );
}

export default App;
