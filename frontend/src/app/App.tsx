import './App.css';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes.js';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar';
import Home from '../pages/Home/Home';
import Experiences from '../pages/Experiences/Experiences';
import Self from '../pages/Self/Self';
import { routes } from '../routes/Routes';

const StyledApp = styled.div`
    color: ${props => props.theme.fontColor};
`;

function App() {
  const location = useLocation();
  console.log("INSIDE OF APP")

  useEffect(() => {
    document.title = "Sebastian Hernandez"
  }, []);

  const [theme, setTheme] = useState("dark");

  return (
          <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <StyledApp>
                <NavBar theme={theme} setTheme={setTheme}/>
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Switch location={location} key={location.pathname.split('/')[1]}>
                    {routes.map((route) => (
                      <Route path={route.path}>
                        <route.component/>
                      </Route>
                    ))}
                  </Switch>
                </AnimatePresence>
              </StyledApp>
            </ThemeProvider>
  );
}

export default App;
