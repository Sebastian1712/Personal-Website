import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Self.css';

function Self() {

    useEffect(() => {
      document.title = "Sebastian | Self"
    }, []);

    return (
      <motion.div 
      className="selfDiv" 
      initial="initial" 
      animate="visible" 
      exit="hidden" 
      variants={pageTransitions}
      transition={transitionSettings}>
          <h1>
            🛠💻 Self page under development 🛠💻
          </h1>
      </motion.div>
    );
  }
  
  export default Self;