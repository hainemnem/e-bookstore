import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import SecondCom from './components/SecondCom';
import UserInputForm from './components/UserInputForm';
function App() {

  const [rows, setRows] = useState ([
    {row_desc:"Hi row 1"},
    {row_desc:"Hi row 2"},
    {row_desc:"Hi row 3"}
  ])

  const addNewRow = () => {
    const newRow = {
      row_desc: "New Row"
    };
    setRows(rows => [...rows,newRow])
  }

  const addNewRowByUser = (content) => {
    const newRow = {
      row_desc: content 
    };
    setRows(rows => [...rows,newRow])
  }
  
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
        }<button onClick={addNewRow}>
          Add a new row 
        </button>
        <UserInputForm input={addNewRowByUser}/>
      </header>
    </div>
  );
}

export default App;
