import React, { useState } from 'react';

const Contact=()=>{
    const [data,setdata]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const inputEvent=(event)=>{
const name=event.target.name;
const value=event.target.value;
setdata((vaal)=>{
    return{
        ...vaal,[name]:value,
    }
})
    }
    const formSubmit=(e)=>{
e.preventDefault();
alert(`${data.fullname}`)
    };
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" name="fullname" onChange={inputEvent} value={data.fullname} placeholder="Enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" onChange={inputEvent} value={data.phone} placeholder="Enter your phone number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" onChange={inputEvent} value={data.email} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1"  name="msg" onChange={inputEvent} value={data.msg} rows="3"></textarea>
</div>
 <div class="col-12">
    <button class="btn btn-primary" type="submit" className="btw">Submit form</button>
  </div>
</form>
            </div>
        </div>
        </>
    );
}
export default Contact;