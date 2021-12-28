import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ExperiencesNav from './ExperiencesNav';
import Projects from './Projects';
import Jobs from './Jobs';
import { experiences } from './ExperiencesData';
import ExperiencesBlog from './ExperiencesBlog';

function Experiences() {

    const match = useRouteMatch();
    console.log("Inside of experiences component:");

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
            <Jobs experiences={experiences}/>
          </Route>
          <Route path={`${match.path}/projects`}>
            <Projects/>
          </Route>
        { experiences.map((experience, i) => {
          console.log("path = " + match.path + experience.path);
          return (
            <Route key={i} path={`${match.path}${experience.path}`}>
              <ExperiencesBlog experience={experience}/>
            </Route>
        )})}
        </Switch>

      </motion.div>
    );
  }

  export default Experiences;