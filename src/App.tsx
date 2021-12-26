import './App.css';
import React, { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes.js';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home/Home';
import Experiences from './pages/Experiences/Experiences';
import Self from './pages/Self/Self';
import Jobs from './pages/Experiences/Jobs';
import Projects from './pages/Experiences/Projects';
import JobsBlog from './pages/Experiences/JobsBlog';

const StyledApp = styled.div`
    color: ${props => props.theme.fontColor};
`;

function App() {
  const location = useLocation();

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
                  <Routes location={location} key={location.pathname.split('/')[1]}>
                    <Route path="/Personal-Website" element={<Home/>}/>
                    <Route path="/experiences" element={<Experiences/>}>
                      <Route path='/experiences' element={<Jobs />}>
                        <Route path='/experiences/one' element={<JobsBlog/>}>
                      </Route>
                      </Route>
                      <Route path='/experiences/projects' element={<Projects/>}/>
                    </Route>
                    <Route path="/self" element={<Self/>} />
                  </Routes>
                </AnimatePresence>
              </StyledApp>
            </ThemeProvider>
  );
}

export default App;
