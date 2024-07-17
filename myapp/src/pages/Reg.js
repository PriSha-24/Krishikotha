

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Reg(){

  
  let[name,setName]=useState("");
  let[contact,setContact]=useState("");
  let[email,setEmail]=useState("");
  let[pass,setPass]=useState("");

    return(
     <>
      <div>
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}

    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
      
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800">Sign Up</h1>

     <p style={{ fontWeight: "bold" }}>Name</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setName(ev.target.value)

     }} /></p>
     <p style={{ fontWeight: "bold" }}>Contact</p>
     <p><input className="form-control" type="number" onChange={(ev)=>{
        setContact(ev.target.value)

     }} /></p>
     <p style={{ fontWeight: "bold" }}>Email</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setEmail(ev.target.value)

     }} /></p>
     <p style={{ fontWeight: "bold" }}>Password</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setPass(ev.target.value)

     }} /></p>

     <p><button className="btn btn-success" onClick={async ()=>{
  
      var fd=new FormData();
      fd.append("name",name);
      fd.append("contact",contact);
      fd.append("email",email);
      fd.append("pass",pass);
    
      var resp=await fetch("http://localhost:2000/auth/signup",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);


     }}>Sign Up</button> <NavLink to="/"><button
     className="btn btn-success">Login</button></NavLink></p>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
     
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
 
</div>

  
     
      </>
    );
 
 }
 export default Reg;