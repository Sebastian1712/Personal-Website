import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ExperiencesNav from './ExperiencesNav';
import Projects from './Projects';
import Jobs from './Jobs';
import JobsBlog from './JobsBlog';
import { routes, RouteWithSubRoutes } from '../../routes/Routes';
import styled from 'styled-components';

const StyledHistoryLine = styled.div`
  border-width: 2px;
  border-style: solid;
  height: 80%;
  position: absolute;
  left: 64%;
`;

function Experiences({ routes }: any) {

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
          {routes.map((route: any, i: any) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </Switch>

      </motion.div>
    );
  }

  export default Experiences;