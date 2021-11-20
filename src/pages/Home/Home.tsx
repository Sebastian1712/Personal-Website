import React from 'react';
import Title from './components/Title';
import MusicAnimation from '../../components/MusicAnimation';
import Icons from '../../components/IconLinks/Icon';

function Home() {
    return (
      <div className="homeDiv">
        <Title/>
        <Icons></Icons>
      </div>
    );
  }
  
  export default Home;