import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Signup(){
    let[name,setName] = useState("");
    let[contact,setContact] = useState("");
    let[email,setEmail] = useState("");
    let[pass,setPass] = useState("");



  return(
  <>
      <div className="container-fluid">
    {/* Carousel */}
    
      <div className="row">
      <div className="col-md-3">
      <div className="sidenav">
        
  <NavLink to="/">Home</NavLink>
  
  <NavLink to="/loan">Return</NavLink>
 
  <a href="#contact">Contact</a>
    </div>
    </div>
    </div>
    </div>
<div className = "container">
    <form>
  <p style={{ fontWeight: "bold" }}>Name</p>
  <p><input type="text" onChange={(ev)=>{
    setName(ev.target.value);
  }}/></p>
  <p style={{ fontWeight: "bold" }}>Contact</p>
  <p><input type="number" onChange={(ev)=>{
    setContact(ev.target.value);
  }}/></p>
  <p style={{ fontWeight: "bold" }}>Email</p>
  <p><input type="email" onChange={(ev)=>{
    setEmail(ev.target.value);
  }}/></p>
  <p style={{ fontWeight: "bold" }}>Password</p>
  <p><input type="text" onChange={(ev)=>{
    setPass(ev.target.value);
  }}/></p>

  <p><button className="btn btn-info" onClick={async()=>{
    var formdata= new FormData();
    formdata.append("name",name);
    formdata.append("contact",contact);
    formdata.append("email",email);
    formdata.append("pass",pass);

    var response = await fetch("http://localhost:2000/customer/signup",{
        method: "POST",
        body: formdata
    });

    var data = await response.json();
    console.log(data);
    alert("Successfully Sign Up! Please Login...");
    window.location='/'
  }}>Signup</button>  <NavLink to="/login"><button className="btn btn-info">Login</button></NavLink> <NavLink to="/"><button className="btn btn-info">Home</button></NavLink></p>
</form>
  </div>

<p className="footer">cOPYRIGHT@2024 BY HERITAGE</p>

</>

 )
  

}

export default Signup;