import logo from './logo.svg';
import './App.css';
import {TrendOptions} from './components/trendOptions';
import { components } from 'react-select';


function App() {
  return (
    <div className="App">
      <TrendOptions className='trendOpt'></TrendOptions>
    </div>
  );
}

export default App;
