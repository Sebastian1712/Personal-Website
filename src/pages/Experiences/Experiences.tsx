import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';

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
          <h1>
            🛠💻 Experiences page under development 🛠💻
          </h1>
      </motion.div>
    );
  }
  
  export default Experiences;