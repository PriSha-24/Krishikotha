
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Login(){
  const navi=useNavigate();
  let[email,setEmail]=useState("");
  let[pass,setPass]=useState("");
    return(<>
  <div>
  <div id="wrapper">
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <div className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800">Login</h1>
     <p style={{ fontWeight: "bold" }}>Email</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setEmail(ev.target.value)
     }} /></p>
     <p style={{ fontWeight: "bold" }}>Password</p>
     <p><input className="form-control" type="password" onChange={(ev)=>{
        setPass(ev.target.value)}} /></p>
     <p><button className="btn btn-success" onClick={async ()=>{
      var fd=new FormData();
      fd.append("email",email);
      fd.append("pass",pass);
      var resp=await fetch("http://localhost:2000/auth/login",{
         method:'POST',
         body:fd});
      var data=await resp.json();
      console.log(data);
       if(data.msg==null){
      localStorage.setItem("cn",data.name);
      localStorage.setItem("cid",data.id);
     window.location='/dashboard'
       }else{
        alert(data.msg)}}}>Login</button> <NavLink to="/reg"><button
     className="btn btn-success">Sign Up</button></NavLink></p>
        </div>
      </div>
    </div>
  </div>
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
</div></>);}
export default Login;