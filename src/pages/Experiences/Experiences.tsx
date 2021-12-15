import React, { useEffect } from 'react';
import MusicAnimation from '../../components/MusicAnimation';
import './Experiences.css';

function Experiences() {

    useEffect(() => {
      document.title = "Sebastian | Experiences"
    }, []);

    return (
      <div className="experiencesDiv">
          <h1>
            🛠💻 Experiences page under development 🛠💻
          </h1>
      </div>
    );
  }
  
  export default Experiences;