import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Listfertilizer(){
    let [fertilizer,setFertilizer]=useState([]);
async function getfertilizer(){
    var resp=await fetch("http://localhost:2000/fertilizer/tel");
      var data=await resp.json();
      setFertilizer(data);
      console.log(data)}useEffect(()=>{getfertilizer();},[])
return(<>
<div>  <div id="wrapper">
   <Sidebar/><div id="content-wrapper" className="d-flex flex-column">
    <div id="content"><Top/>
 <div className="container-fluid">
  <h1 className="h3 mb-4 text-gray-800">List Crops</h1>
  <table className="table table-bordered">
  <thead><tr><th>Category</th>
  <th>Crop Name</th>
  <th>Image</th>
  <th>Details</th>
  <th>Delete</th>
  <th>Update</th></tr></thead><tbody>
{fertilizer.map((p)=><tr key={p._id}>
        <td>{p.crop_cat}</td>
        <td>{p.crop_name}</td>
        <td><img className="fimg" src={"http://localhost:2000/fertilizer_img/"+p.crop_image} /></td>
        <td>{p.crop_details}</td>
        <td><button className="btn btn-danger" onClick={async()=>{ 
         if(window.confirm('Are you sure?')){var fd=new FormData();
      fd.append("pid",p._id);
      var resp=await fetch("http://localhost:2000/fertilizer/del",{
         method:'POST', body:fd});
      var data=await resp.json();
      getfertilizer();}}}>Delete</button></td>
      <td><Link to={"/edit-fertilizer/"+p._id} className="btn btn-success">Edit</Link></td>
      </tr>)}</tbody></table></div></div><Footer/></div> </div>
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" /></a></div> </>);}
 export default Listfertilizer;