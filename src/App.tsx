import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component = {Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
