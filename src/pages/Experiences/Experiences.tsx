import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { experiencesTransitions, pageTransitions, transitionSettings } from '../../components/Transitions';
import './Experiences.css';
import Frame from '../../components/Frame/Frame';
import microsoftLogo from '../../public/microsoftIcon.png';
import intelLogo from '../../public/newIntelIcon.png';
import { FrameConfigurations } from '../../components/Frame/FrameConfigurations';
import { FrameArtifacts } from '../../components/Frame/FrameArtifacts';
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ExperiencesNav from './ExperiencesNav';
import Projects from './Projects';
import { NavLink } from '../../components/Navbar/NavBarElements';
import Jobs from './Jobs';

// i want to render the job frames (component) from start
// but, the projects component if click the component
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

const experiences = [
  {
    name: 'jobs',
    id: '/'
  },
  {
    name: 'projects',
    id: '/projects'
  }
]

const StyledExperiencesNav = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding: 2%;
  gap: 2%;
  margin-top: -3%;

  @media only screen and (max-width: 500px) {
    margin-bottom: 4%;
    }
`

const StyledExperiencesLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;

  @media only screen and (max-width: 500px) {
        font-size: 1.3rem;
    }
`;

function Experiences() {

    const match = useRouteMatch();
    console.log("This is the match path " + match.path);

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
            <Route path={`${match.path}/projects`}>
              <Projects/>
            </Route>
            <Route path={match.path}>
              <Jobs/>
            </Route>
        </Switch>

      </motion.div>
    );
  }

  export default Experiences;