
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Listscheme(){

    let [products,setProducts]=useState([]);

async function getproduct(){

    var resp=await fetch("http://localhost:2000/scheme/sel");
      var data=await resp.json();
      setProducts(data);
      console.log(data)
}

    useEffect(()=>{
        getproduct();
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
          <h1 className="h3 mb-4 text-gray-800">List Scheme</h1>
          <table className="table table-bordered">
    <thead>
      <tr>
      <th>Category</th>
        <th>Name</th>
        <th>Image</th>
        <th>Details</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
{products.map((p)=>
      <tr key={p._id}>
        <td>{p.scheme_cat}</td>
        <td>{p.scheme_name}</td>
        <td><img className="pimg" src={"http://localhost:2000/scheme_img/"+p.scheme_image} /></td>
        <td>{p.scheme_details}</td>
        <td><button className="btn btn-danger" onClick={async()=>{
         
         if(window.confirm('Are you sure?')){

            var fd=new FormData();
      
      fd.append("pid",p._id);
      var resp=await fetch("http://localhost:2000/scheme/del",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      getproduct();


         }


        }}>Delete</button></td>

        <td><Link to={"/edit-scheme/"+p._id} className="btn btn-success">Edit</Link></td>
       
      </tr>
)}
    </tbody>
  </table>


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
 export default Listscheme;