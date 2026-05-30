import logo from './logo.svg';
import './App.css';
import SecondCom from './components/SecondCom';

function App() {

  const rows = [
    {row:"Hi row 1"},
    {row:"Hi row 2"}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SecondCom input={rows[0].row}/>
        <SecondCom input={rows[1].row}/>
      </header>
    </div>
  );
}

export default App;
