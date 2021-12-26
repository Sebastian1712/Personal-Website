import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import ExperiencesNav from './ExperiencesNav';
import Projects from './Projects';
import Jobs from './Jobs';
import JobsBlog from './JobsBlog';

function Experiences() {

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
        <Outlet/>
      </motion.div>
    );
  }

  export default Experiences;