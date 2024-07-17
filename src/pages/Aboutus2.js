import { NavLink } from "react-router-dom";


function Aboutus2() {
    return (
     <>
<div>
  <div className="container-fluid">
    {/* Carousel */}
    
    <div className="row ">
      <div className="col-md-2 ">
      <div class="sidenav">
        
  <NavLink to="/home2">Home</NavLink>
  
 
</div>
      </div>
      <div className="col-md-10 ">
      <div className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="about_main">
            <h1 className="about_taital">About KrishiKotha</h1>
            <p className="about_text">We at Krishi Kotha provide a platform for farmers to know about the latest schemes and services provides by the government for their benefit.<br/><h3>Loan Schemes</h3><br/>We List the latest loan schemes fro the farmers.<br/><h3>Latest Schemes</h3><br/>We list the latest schemes for farmers.<br/><h3>Fertilizers</h3><br/>Best fertilizers for different crops. </p>
          </div>
        </div>
        <div className="col-md-6 padding_0">
          <div className="image_7"><img src="images/img-7.png" /></div>
        </div>
      </div>
    </div>
  </div>
        </div>
      </div>
    </div>
    <p className="footer">cOPYRIGHT@2024 BY HERITAGE</p>
  </div> 

     </>
    
    );
  }
  
  export default Aboutus2;