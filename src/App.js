import React from 'react';

import Header from '../src/components/Header';
import './App.css';
import Main from './Main.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container mt-4">
        <Main/>
      </div>
    </div>
  );
}

export default App;
