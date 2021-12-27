import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ExperiencesNav from './ExperiencesNav';
import Projects from './Projects';
import Jobs from './Jobs';
import JobsBlog from './JobsBlog';

function Experiences() {

    const match = useRouteMatch();

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
            <Route exact path={match.path}>
              <Jobs/>
            </Route>
            <Route path={`${match.path}/projects`}>
              <Projects/>
            </Route>
            <Route path={`${match.path}/one`}>
              <JobsBlog/>
            </Route>
        </Switch>

      </motion.div>
    );
  }

  export default Experiences;