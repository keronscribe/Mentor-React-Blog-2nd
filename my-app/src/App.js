import React from 'react';
import Header from './header';
import List from './list';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="list-wrapper">
        <List />
      </div>
    </div>
  );
}

export default App;
