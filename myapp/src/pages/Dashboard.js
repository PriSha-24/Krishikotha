
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useEffect, useState } from "react";
function Dashboard(){

  let [cust_name,setCust_name]=useState("")


  useEffect(()=>{
    var cnn=localStorage.getItem("cn");
    if(cnn!=null){
    setCust_name(cnn)
    }

  },[])
    return(
     <>
      <div>
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
   <Sidebar/>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
      <Top/>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800">Dashboard {cust_name} </h1>
        
        <p><button class="btn btn-primary" onClick={()=>{
          localStorage.removeItem("cn");
          localStorage.removeItem("cid");
          
          window.location='/'
        }}>Logout</button></p>
        
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
     <Footer/>
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
 export default Dashboard;