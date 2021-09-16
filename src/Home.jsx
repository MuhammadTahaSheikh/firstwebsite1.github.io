import React from 'react';
import Common from './Common';
import web from "./images/1juma.png";
const Home=()=>{
    return(
        <>
      <Common name="Grow your business" 
     imgsrc={web} 
     visit="/service"
      btname="Get started"

      />
        </>
    );
}
export default Home;