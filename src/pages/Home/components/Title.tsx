import React from 'react';
import './Title.css';

function Title() {
    return (
      <div className="titleDiv">
        <h1>Hi, I'm Sebastian 👋</h1>
        <p>I’m a knowledge seeker who loves computer science 💻,<br></br></p>
        <p className="secondPar">music 🎹, philosophy 💭, nature 🍃, and much more ⚽️! </p>
        <div className="line-1">
          <span className="actualLine"></span>
        </div>
      </div>
    );
  }
  
  export default Title;