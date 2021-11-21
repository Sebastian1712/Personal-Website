import React, { useState } from 'react';
import logo from './logo.svg';
import Home from './pages/Home/Home';
import MusicAnimation from './components/MusicAnimation';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Passions from './pages/Passions/Passions';
import Experiences from './pages/Experiences/Experiences';
import Recommendations from './pages/Recommendations/Recommendations';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';

const StyledApp = styled.div`
    color: ${props => props.theme.fontColor};
`

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
        <BrowserRouter>
          <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <NavBar/>
                <Route path="/" exact component = {Home} />
                <Route path="/passions" exact component = {Passions} />
                <Route path="/experiences" exact component = {Experiences} />
                <Route path="/recommendations" exact component = {Recommendations} />
            </StyledApp>
            </ThemeProvider>
        </BrowserRouter>
  );
}

export default App;
