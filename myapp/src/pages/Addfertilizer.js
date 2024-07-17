import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState } from "react";
function Addfertilizer(){
  let[fname,setFname]=useState("");
  let[fdetails,setFdetails]=useState("");
  let[fcat,setFcat]=useState("");
  let[fimg,setFimg]=useState(null);
  return(<>
  <div><div id="wrapper"><Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content"><Top/>
        <div className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800">Add Crop Details</h1>
     <p style={{ fontWeight: "bold" }}>Category</p>
     <p><select value={fcat} className="form-control" onChange={(ev)=>{
        setFcat(ev.target.value)}}>
     <option value="">-Select Category-</option>
     <option value="Grains">Grains</option>
     <option value="Millets">Millets</option>
     <option value="Fruits">Fruits</option>
     <option value="Vegetables">Vegetables</option>
     <option value="Flowers">Flowers</option></select></p>
     <p style={{ fontWeight: "bold" }}>Crop Name</p>
     <p><input className="form-control" type="text" onChange={(ev)=>{
        setFname(ev.target.value)}} /></p>
     <p style={{ fontWeight: "bold" }}>Details</p>
     <p><textarea className="form-control" onChange={(ev)=>{
        setFdetails(ev.target.value)
     }}></textarea></p>
     <p style={{ fontWeight: "bold" }}>Image</p>
     <p><input type="file" onChange={(ev)=>{
        setFimg(ev.target.files[0])}} /></p>
     <p><button className="btn btn-success" onClick={async ()=>{
      var fd=new FormData();
      fd.append("name",fname);
      fd.append("cat",fcat);
      fd.append("fd",fdetails);
      fd.append("fimg",fimg);
      var resp=await fetch("http://localhost:2000/fertilizer/ins",{
      method:'POST',body:fd});
      var data=await resp.json();
      console.log(data);
      alert("Successfully added...");}}>Add Crop Details</button></p>
        </div></div><Footer/></div></div>
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" /></a></div> </>);}
export default Addfertilizer;