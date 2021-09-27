import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import MusicAnimation from './components/MusicAnimation';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Passions from './pages/Passions/Passions';
import Experiences from './pages/Experiences/Experiences';
import Recommendations from './pages/Recommendations/Recommendations';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route path="/" exact component = {Home} />
        <Route path="/passions" exact component = {Passions} />
        <Route path="/experiences" exact component = {Experiences} />
        <Route path="/recommendations" exact component = {Recommendations} />
      </div>
    </BrowserRouter>
  );
}

export default App;
