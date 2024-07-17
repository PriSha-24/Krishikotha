
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState,useEffect } from "react";

import { useParams,useNavigate } from "react-router-dom";
function Editproduct(){

let [product,setProduct]=useState({});    

  const params=useParams();

  const navi=useNavigate();

async function getpro(){
    var id=params.pid;
   

    var fd=new FormData();
      fd.append("id",id);
     
      var resp=await fetch("http://localhost:2000/product/edit",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();

      console.log(data);

      setProduct(data)

      setPcat(data.product_cat);
      setPname(data.product_name);
      setPprice(data.product_price)

      setPdetails(data.product_details)
      setimgurl(data.product_image);
     
}

useEffect(()=>{
    getpro(); 
},[])



  let[pname,setPname]=useState("");
  let[pprice,setPprice]=useState("");
  let[pdetails,setPdetails]=useState("");
  let[pcat,setPcat]=useState("");
  let[pimg,setPimg]=useState(null);
  let [imgurl,setimgurl]=useState("");
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
          <h1 className="h3 mb-4 text-gray-800">Edit Product</h1>

          <p>Category</p>
     <p>
     <select value={pcat} className="form-control" onChange={(ev)=>{
        setPcat(ev.target.value)

     }}>
     <option value="">-Select Category-</option>
     <option value="Grocery">Grocery</option>
     <option value="Electronics">Electronics</option>

     </select>
     </p>
     <p>Name</p>
     <p><input value={pname} className="form-control" type="text" onChange={(ev)=>{
        setPname(ev.target.value)

     }} /></p>
     <p>Price</p>
     <p><input value={pprice}  className="form-control" type="text" onChange={(ev)=>{
        setPprice(ev.target.value)

     }} /></p>
     <p>Details</p>
     <p><textarea className="form-control" value={pdetails} onChange={(ev)=>{
        setPdetails(ev.target.value)

     }}></textarea></p>

     <p>Image</p>
     <p><input type="file" onChange={(ev)=>{
        setPimg(ev.target.files[0])

     }} /></p>

     <p><img className="pimg" src={"http://localhost:2000/product_img/"+imgurl} /></p>

     <p><button className="btn btn-success" onClick={async ()=>{
      
      var fd=new FormData();
      fd.append("name",pname);
      fd.append("cat",pcat);
      fd.append("price",pprice);
      fd.append("pd",pdetails);
      fd.append("pimg",pimg);
      fd.append("id",params.pid);
      var resp=await fetch("http://localhost:2000/product/upd",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);

      navi('/list-product');


     }}>Edit Product</button></p>
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
 export default Editproduct;