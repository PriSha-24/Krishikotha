
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState,useEffect } from "react";

import { useParams,useNavigate } from "react-router-dom";
function EditLoan(){

let [loan,setLoan]=useState({});    

  const params=useParams();

  const navi =useNavigate();

async function getloan(){
    var id=params.pid;
   

    var fd=new FormData();
      fd.append("pid",id);
     
      var resp=await fetch("http://localhost:2000/loan/edit",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();

      console.log(data);

      setLoan(data)

      setLcat(data.loan_cat);
      setLname(data.loan_name);

      setLdetails(data.loan_details)
      setImgurl(data.loan_image);
     
}

useEffect(()=>{
    getloan(); 
},[])



  let[lname,setLname]=useState("");
  let[ldetails,setLdetails]=useState("");
  let[lcat,setLcat]=useState("");
  let[limg,setLimg]=useState(null);
  let [imgurl,setImgurl]=useState("");
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
          <h1 className="h3 mb-4 text-gray-800">Edit Loan</h1>

          <p>Category</p>
     <p>
     <select value={lcat} className="form-control" onChange={(ev)=>{
        setLcat(ev.target.value)

     }}>
     <option value="">-Select Category-</option>
     <option value="Land">Land</option>
     <option value="Farm">Equipments</option>

     </select>
     </p>
     <p>Name</p>
     <p><input value={lname} className="form-control" type="text" onChange={(ev)=>{
        setLname(ev.target.value)

     }} /></p>
    
     <p>Details</p>
     <p><textarea className="form-control" value={ldetails} onChange={(ev)=>{
        setLdetails(ev.target.value)

     }}></textarea></p>

     <p>Image</p>
     <p><input type="file" onChange={(ev)=>{
        setLimg(ev.target.files[0])

     }} /></p>

     <p><img className="pimg" src={"http://localhost:2000/loan_img/"+imgurl} /></p>

     <p><button className="btn btn-success" onClick={async ()=>{
      
      var fd=new FormData();
      fd.append("name",lname);
      fd.append("cat",lcat);
      fd.append("pd",ldetails);
      fd.append("pimg",limg);
      fd.append("id",params.pid);
      var resp=await fetch("http://localhost:2000/loan/upd",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);

      navi('/list-loan');


     }}>Edit Loan</button></p>
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
 export default EditLoan;