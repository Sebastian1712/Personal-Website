import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  display: absolute;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;

  @media only screen and (max-width: 500px) {
        font-size: 1.3rem;
    }
`;

const ExperiencesNav = () => {
    return(
        <div>
            <StyledExperiencesNav>
                <StyledExperiencesLink to='/experiences' exact activeClassName="activeExperiencesLink" className='experiencesLink'>
                    Jobs
                </StyledExperiencesLink>
                <StyledExperiencesLink to='/experiences/projects' exact activeClassName="activeExperiencesLink" className='experiencesLink'>
                    Projects
                </StyledExperiencesLink>
            </StyledExperiencesNav>
        </div>
    );
}

export default ExperiencesNav;