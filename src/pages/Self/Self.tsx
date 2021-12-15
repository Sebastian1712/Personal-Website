import React, { useEffect } from 'react';
import MusicAnimation from '../../components/MusicAnimation';
import './Self.css';

function Self() {

  useEffect(() => {
    document.title = "Sebastian | Self"
  }, []);

    return (
      <div className="selfDiv">
          <h1>
            🛠💻 Self page under development 🛠💻
          </h1>
      </div>
    );
  }
  
  export default Self;