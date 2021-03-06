import React from 'react';
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
    return(
        <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
    
    <div className="col-10 mx-auto">
    

    
    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center f-column">
<h1>{props.name}<strong>Taha</strong></h1>
<h2 className="my-3"> We are Taha sheikh team</h2>
<div className="mt-3">
<NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>

</div>
    </div>
    <div className="col-lg-6 order-1 order-lg-2 header-img">
<img src={props.imgsrc} className="img-fluid animated" alt="kuch nhe ha"/>
    
    
    </div>
    
    </div>
    </div>
    
      </section>
        </>
    );
}
export default Common;