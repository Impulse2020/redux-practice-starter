import React from 'react';
import PlayerList from './components/PlayerList';
import PlayerForm from './components/PlayersForm';
import './App.css';


function App() {
  return (
    <div className="center">
      <h1>Soccer Players</h1>
      <div>Welcome to the app</div>
      <div>Start inside of the `src/index.js` file</div>
      <div>Have fun!</div>
      <div>
      <PlayerList />
      <PlayerForm />
      </div>
    </div>
    
  );
}

export default App;
