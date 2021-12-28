import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import Frame from '../../components/Frame/Frame';
import microsoftLogo from '../../public/microsoftIcon.png';
import intelLogo from '../../public/newIntelIcon.png';
import { FrameConfigurations } from '../../components/Frame/FrameConfigurations';
import { FrameArtifacts } from '../../components/Frame/FrameArtifacts';
import { experiences } from './ExperiencesData';

const experienceOne: FrameConfigurations & FrameArtifacts = {
  width: 300,
  height: 150,
  strokeSize: 3,
  color: "F7F2EC",
  icon: microsoftLogo,
  title: "Microsoft",
  description: "Software Engineering Intern"
}

const experienceTwo: FrameConfigurations & FrameArtifacts = {
  width: 300,
  height: 150,
  strokeSize: 3,
  color: "F7F2EC",
  icon: microsoftLogo,
  title: "Microsoft",
  description: "Explore Intern"
}

const experienceThree: FrameConfigurations & FrameArtifacts = {
  width: 300,
  height: 150,
  strokeSize: 3,
  color: "F7F2EC",
  icon: intelLogo,
  title: "Intel",
  description: "Business Ops Intern"
}

const jobFrameConfiguration: FrameConfigurations = {
  width: 300,
  height: 150,
  strokeSize: 3,
  color: "F7F2EC"
}

function Jobs() {

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
        <Frame 
          {...experienceOne}
        ></Frame>

        <Frame 
          {...experienceTwo}
        ></Frame>

        <Frame 
          {...experienceThree}
        ></Frame>
      </motion.div>
    );
  }

  export default Jobs;