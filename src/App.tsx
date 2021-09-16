import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import MusicAnimation from './components/MusicAnimation';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route path="/" exact component = {Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
