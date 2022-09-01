import './App.css';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes.js';
import { AnimatePresence } from 'framer-motion';
import { Switch, useLocation } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { routes, RouteWithSubRoutes } from '../routes/Routes';

const StyledApp = styled.div`
    color: ${props => props.theme.fontColor};
`;

function App() {
  const location = useLocation();
  console.log("INSIDE OF APP")

  useEffect(() => {
    document.title = "Sebastian Hernandez"
  }, []);

  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
          <NavBar theme={theme} setTheme={setTheme}/>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname.split('/')[1]}>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </Switch>
          </AnimatePresence>
        </StyledApp>
      </ThemeProvider>
  );
}

export default App;
