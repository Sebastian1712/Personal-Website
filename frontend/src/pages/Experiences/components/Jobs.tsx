import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageTransitions, transitionSettings } from '../../../components/Transitions';
import '../Experiences.css';
import Frame from './Frame';
import { FrameConfigurations } from '../../../types/FrameConfigurations';
import { JobType } from '../../../types/JobType';

const jobFrameConfiguration: FrameConfigurations = {
  width: 300,
  height: 150,
  strokeSize: 3,
  color: "F7F2EC"
}

function Jobs(props: {experiences: JobType[]}) {

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
        { props.experiences.map((experience, i) => (
            <Frame key={i} configuration={jobFrameConfiguration} experience={experience} parentPath={"/experiences"}/>
        ))}
      </motion.div>
    );
  }

  export default Jobs;