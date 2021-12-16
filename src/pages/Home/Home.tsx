import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import Icons from '../../components/IconLinks/Icon';

function Home() {
    const [animate, setAnimation] = useState("true");
    useEffect(() => {
      document.title = "Sebastian Hernandez"
    }, []);
    
    return (
      <div className="homeDiv">
        <Title animate={animate} setAnimation={setAnimation}/>
        <Icons></Icons>
      </div>
    );
  }
  
  export default Home;