import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ExperiencesNav from './components/ExperiencesNav';
import Projects from './components/Projects';
import Jobs from './components/Jobs';
import { experiences } from '../../data/experiences/ExperiencesData';
import ExperiencesBlog from './components/ExperiencesBlog';

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
            <Jobs experiences={experiences}/>
          </Route>
          <Route path={`${match.path}/projects`}>
            <Projects/>
          </Route>
        { experiences.map((experience, i) => {
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