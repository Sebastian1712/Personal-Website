import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ExperiencesNav from './ExperiencesNav';
import Projects from './Projects';
import Jobs from './Jobs';

function Experiences() {

    const match = useRouteMatch();
    console.log("This is the match path " + match.path);

    useEffect(() => {
      document.title = "Sebastian | Experiences"
    }, []);

    return (
      
      <motion.div 
      className="experiencesDiv" 
      initial="initial"
      animate="visible" 
      exit="hidden"
      variants={pageTransitions}
      transition={transitionSettings}>
        <ExperiencesNav/>
        <Switch>
            <Route path={`${match.path}/projects`}>
              <Projects/>
            </Route>
            <Route path={match.path}>
              <Jobs/>
            </Route>
        </Switch>

      </motion.div>
    );
  }

  export default Experiences;