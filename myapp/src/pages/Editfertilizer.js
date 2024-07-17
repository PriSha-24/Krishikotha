import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import Footer from "../inc/Footer";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function Editfertilizer() {
  let [fertilizer, setFertilizer] = useState({});
  const params = useParams();
  const navi = useNavigate();

  async function getfertilizer() {
    var id = params.pid;
    var fd = new FormData();
    fd.append("id", id);
    var resp = await fetch("http://localhost:2000/fertilizer/edit", {
      method: 'POST',
      body: fd
    });
    var data = await resp.json();
    console.log(data);

    setFertilizer(data);

    // You can remove these lines as they are setting states that you already have initialized
    setFcat(data.crop_cat);
    setFname(data.crop_name);
    setFdetails(data.crop_details);
    setImgurl(data.crop_image);
  }

  useEffect(() => {
    getfertilizer();
  }, [])

  let [fname, setFname] = useState("");
  let [fdetails, setFdetails] = useState("");
  let [fcat, setFcat] = useState("");
  let [fimg, setFimg] = useState(null);
  let [imgurl, setImgurl] = useState("");

  return (
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
          <h1 className="h3 mb-4 text-gray-800">Edit Fertilizer</h1>

          <p>Category</p>
     <p>
     <select value={fcat} className="form-control" onChange={(ev)=>{
        setFcat(ev.target.value)

     }}>
     <option value="">-Select Category-</option>
     <option value="Grains">Grains</option>
     <option value="Millets">Millets</option>
     <option value="Fruits">Fruits</option>
     <option value="Vegetables">Vegetables</option>
     <option value="Flowers">Flowers</option>

     </select>
     </p>
     <p>Crop Name</p>
     <p><input value={fname} className="form-control" type="text" onChange={(ev)=>{
        setFname(ev.target.value)

     }} /></p>
     <p>Crop Details</p>
     <p><textarea className="form-control" value={fdetails} onChange={(ev)=>{
        setFdetails(ev.target.value)

     }}></textarea></p>

     <p>Image</p>
     <p><input type="file" onChange={(ev)=>{
        setFimg(ev.target.files[0])

     }} /></p>

     <p><img className="fimg" src={"http://localhost:2000/fertilizer_img/"+imgurl} /></p>

     <p><button className="btn btn-success" onClick={async ()=>{
      
      var fd=new FormData();
      fd.append("name",fname);
      fd.append("cat",fcat);
      fd.append("fd",fdetails);
      fd.append("fimg",fimg);
      fd.append("id",params.pid);
      var resp=await fetch("http://localhost:2000/fertilizer/upd",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);

      navi('/list-fertilizer');


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

export default Editfertilizer;
