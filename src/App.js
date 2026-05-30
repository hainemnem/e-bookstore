import logo from './logo.svg';
import './App.css';
import SecondCom from './components/SecondCom';

function App() {

  const rows = [
    {row_desc:"Hi row 1"},
    {row_desc:"Hi row 2"},
    {row_desc:"Hi row 3"}
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
        {
          rows.map(row => (
            <SecondCom input={row.row_desc}/>
          )

          )
        }
      </header>
    </div>
  );
}

export default App;
