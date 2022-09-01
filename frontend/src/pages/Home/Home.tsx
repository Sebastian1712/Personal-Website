import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Icons from '../../components/IconLinks/Icon';
import Music from './components/Music';
import Title from './components/Title';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';

function Home() {
    const [animate, setAnimation] = useState("true");

    useEffect(() => {
      document.title = "Sebastian Hernandez"
    }, []);
    
    return (
    <>
      <motion.div 
      className="homeDiv" 
      initial="initial" 
      animate="visible" 
      exit="hidden" 
      variants={pageTransitions}
      transition={transitionSettings}>
        <Title animate={animate} setAnimation={setAnimation}/>
      </motion.div>
      <Footer/>
      {/* <Music/> */}
      {/* <Icons></Icons> */}
    </>
    );
  }
  
  export default Home;