import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Fertilizer() {

  let[prd, setPrd] = useState([]);
   
   async function getfertilizer(){
    var data =await fetch("http://localhost:2000/fertilizer/tel");
    var resultset= await data.json();
    setPrd(resultset);

   }

   useEffect(()=>{
    getfertilizer();

    },[])

    return (
     <>
<div>
  <div className="container-fluid">
    {/* Carousel */}
    
    <div className="row ">
      <div className="col-md-2 ">
      <div class="sidenav">
        
  <NavLink to="/home2">Home</NavLink>
  
  <NavLink to="/loan-services">Loan Services</NavLink>

  <NavLink to="/schemes">Latest Schemes</NavLink>

  <NavLink to="/fertilizer">Crops</NavLink>
 
      </div>
      </div>
      </div>
    </div>

    <div className = "container">
<div className="row mproduct" style={{paddingLeft:200}}>
  {prd.map((k)=>
<div className="col-md-4" style={{paddingBottom:50}}>

<div class="card">
  <img className="card-img-top" src={"http://localhost:2000/fertilizer_img/"+k.crop_image} alt="Card image" />
  <div className="card-body">
    <h4 className="card-title" style={{textAlign:"center",fontWeight: "bold"}}>{k.crop_name}</h4>
    <p className="p1" style={{textAlign: "center"}}> <NavLink href="#" className="btn btn-warning"data-bs-toggle="modal" data-bs-target={"#seeInfo"+k._id}>Crop Info</NavLink> </p>
  </div>
</div>

<div class="modal" id={"seeInfo"+k._id}>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">{k.crop_name}</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      
      <div class="modal-body">
        {/* <div class="ExternalFiles">
         <iframe src="RiceFarming.pdf" width={750} height={300}></iframe>
        </div> */}
       <div className="container"><h4>{k.crop_details}</h4></div>
      </div>

     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

</div>


)}
</div>

</div>

    <p className="footer">COPYRIGHT@2024 BY HERITAGE</p>
  </div> 

     </>
    
    );
  }
  
  export default Fertilizer;