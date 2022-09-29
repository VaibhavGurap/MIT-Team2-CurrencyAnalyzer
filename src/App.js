import './App.css';
import {TrendOptions} from './components/trendOptions';
import {Graph} from './components/graph';

function App() {
  return (
    <div className="App">
      <div >
      <TrendOptions className='trendOpt' id='currency_1'/>
      <TrendOptions className='trendOpt' id='currency_2'/>
      </div>
      <div>
        <Graph/>
      </div>
    </div>
  );
}

export default App;
