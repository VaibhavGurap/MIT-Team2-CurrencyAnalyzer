import React, { useEffect, useState } from "react";
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

  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);
  const [quarterly, setQuarterly] = useState(false);
  const [yearly, setYearly] = useState(false);

  const [graphChoice, setGraphChoice] = useState(true);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (chartData) {
      setUserData({
        labels: Object.entries(chartData).map((item) => item[1].date),
        datasets: [
          {
            label: "Exchange Rates",
            data: Object.entries(chartData).map((item) => item[1].curr2),
            backgroundColor: ["black", "red", "blue"],
          },
        ],
      });
    }
  }, [chartData]);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Exchange Rates",
        data: [],
        backgroundColor: ["black", "red", "blue"],
      },
    ],
  });

  const [UserChoice, setChoice] = useState(true);

  return (
    <div className="major ">
      <div className="container">
        <div className="row">
          <div className="col trends">
            <TrendOptions
              weekly={weekly}
              monthly={monthly}
              quarterly={quarterly}
              yearly={yearly}
              setChartData={setChartData}
            />
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
                  setWeekly(true);
                  setMonthly(false);
                  setQuarterly(false);
                  setYearly(false);
                }}
              >
                W
              </button>
              <button
                onClick={() => {
                  setWeekly(false);
                  setMonthly(true);
                  setQuarterly(false);
                  setYearly(false);
                }}
              >
                M
              </button>
              <button
                onClick={() => {
                  setWeekly(false);
                  setMonthly(false);
                  setQuarterly(true);
                  setYearly(false);
                }}
              >
                Q
              </button>
              <button
                onClick={() => {
                  setWeekly(false);
                  setMonthly(false);
                  setQuarterly(false);
                  setYearly(true);
                }}
              >
                Y
              </button>
            </div>

            <button onClick={() => setGraphChoice(true)}>
              <i class="fa fa-area-chart"></i>
            </button>
            <button onClick={() => setGraphChoice(false)}>
              <i class="fa fa-bar-chart"></i>
            </button>
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
