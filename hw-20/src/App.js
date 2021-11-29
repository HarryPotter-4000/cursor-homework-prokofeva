import React from 'react';
import './App.css';
import Timer from './components/timer'

function App() {

  return (
    <div className="App">
      <Timer startTime='60000' step='1' />
      <Timer startTime='60000' step='2'/>
    </div>
  );
}

export default App;
