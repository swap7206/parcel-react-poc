import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import constants from 'constants';

const App = () => {
	const [state, setState] = useState("default");
	useEffect(() => {
		setTimeout(() => {
			setState("State Updated");
		}, 5000);
	}, [])
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  <code>src/App.tsx</code> and save to reload.
			  </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
				  Learn React {state}
			  </a>
			  <h1>{constants.aliasTest}</h1>
      </header>
    </div>
  );
}

export default App;
