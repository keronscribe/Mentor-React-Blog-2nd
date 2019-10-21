import React,{useEffect} from 'react';
import Header from './header';
import List from './list';
import axios from 'axios';
import './App.css';

function App() {
  const url = `https://qootest.com/posts`;
  useEffect(()=>{
    axios.get(url)
    .then(response=>{
      console.log(response);
    })
  })

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
