
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState } from "react";
function Addproduct(){

  
  let[pname,setPname]=useState("");
  let[pprice,setPprice]=useState("");
  let[pdetails,setPdetails]=useState("");
  let[pcat,setPcat]=useState("");
  let[pimg,setPimg]=useState(null);
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
          <h1 className="h3 mb-4 text-gray-800">Add Product</h1>

          <p>Category</p>
     <p>
     <select className="form-control" onChange={(ev)=>{
        setPcat(ev.target.value)

     }}>
     <option value="">-Select Category-</option>
     <option value="Grocery">Grocery</option>
     <option value="Electronics">Electronics</option>

     </select>
     </p>
     <p>Name</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setPname(ev.target.value)

     }} /></p>
     <p>Price</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setPprice(ev.target.value)

     }} /></p>
     <p>Details</p>
     <p><textarea className="form-control" onChange={(ev)=>{
        setPdetails(ev.target.value)

     }}></textarea></p>

     <p>Image</p>
     <p><input type="file" onChange={(ev)=>{
        setPimg(ev.target.files[0])

     }} /></p>

     <p><button className="btn btn-success" onClick={async ()=>{
      //   console.log(pcat)
      //   console.log(pname)
      //   console.log(pprice)
      //   console.log(pdetails)

      var fd=new FormData();
      fd.append("name",pname);
      fd.append("cat",pcat);
      fd.append("price",pprice);
      fd.append("pd",pdetails);
      fd.append("pimg",pimg);
      var resp=await fetch("http://localhost:2000/product/ins",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);


     }}>Add Product</button></p>
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
 export default Addproduct;