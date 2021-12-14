import React, { useState } from 'react';
import Title from './components/Title';
import MusicAnimation from '../../components/MusicAnimation';
import Icons from '../../components/IconLinks/Icon';

function Home() {
  const [animate, setAnimation] = useState("true");

    return (
      <div className="homeDiv">
        <Title animate={animate} setAnimation={setAnimation}/>
        <Icons></Icons>
      </div>
    );
  }
  
  export default Home;