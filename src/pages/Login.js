import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Login(){

  const navi=useNavigate();

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
          <h1 className="h3 mb-4 text-gray-800">Login</h1>

 
     <p style={{ fontWeight: "bold" }}>Email</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setEmail(ev.target.value)

     }} /></p>
     <p style={{ fontWeight: "bold" }}>Password</p>
     <p><input className="form-control" type="password" onChange={(ev)=>{
        setPass(ev.target.value)

     }} /></p>

     <p><button className="btn btn-success" onClick={async ()=>{
  
      var fd=new FormData();
 
      fd.append("email",email);
      fd.append("pass",pass);
    
      var resp=await fetch("http://localhost:2000/customer/login",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);

       if(data.msg==null){
      localStorage.setItem("cn",data.name);
      localStorage.setItem("cid",data.id);
      alert("Successfully Login!")
     // navi("/dashboard")
     window.location='/home2'
       }else{
        alert(data.msg)
       }


     }}>Login</button> <NavLink to="/signup"><button
     className="btn btn-success">Sign Up</button></NavLink> <NavLink to="/"><button
     className="btn btn-success">Home</button></NavLink></p>

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
 export default Login;