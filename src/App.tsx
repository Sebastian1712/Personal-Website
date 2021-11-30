import React, { useState } from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import MusicAnimation from './components/MusicAnimation';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Self from './pages/Self/Self';
import Experiences from './pages/Experiences/Experiences';
import Recommendations from './pages/Recommendations/Recommendations';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import { BsSun } from "react-icons/bs";

const StyledApp = styled.div`
    color: ${props => props.theme.fontColor};
`

function App() {

  const [theme, setTheme] = useState("dark");

  return (
        <BrowserRouter>
          <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <NavBar theme={theme} setTheme={setTheme}/>
                {/* <BsSun size="30" className=""></BsSun> */}
                <Route path="/Personal-Website" exact component = {Home} />
                <Route path="/self" exact component = {Self} />
                <Route path="/experiences" exact component = {Experiences} />
                <Route path="/recommendations" exact component = {Recommendations} />
            </StyledApp>
            </ThemeProvider>
        </BrowserRouter>
  );
}

export default App;
