import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Home2() {

  let [cust_name,setCust_name]=useState("")

  useEffect(()=>{
    var cnn=localStorage.getItem("cn");
    if(cnn!=null){
    setCust_name(cnn)
    }

  },[])
    return (
     <>
<div>
  <div className="header_section">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo"><NavLink to="/"><img src="images/logo.png" /></NavLink></div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home2">Home</NavLink>
          <NavLink className="nav-item nav-link" to="/loan">Loan & Schemes</NavLink>
          <NavLink className="nav-item nav-link" to="/fertilizer">Fertilizers</NavLink>
          <NavLink className="nav-item nav-link" to="/about2">About us</NavLink>
          
        </div>
      </div>
      <div className="login_menu">
        <ul>
          <li><h1 className="h3 mb-4 text-white-800">Dashboard {cust_name}</h1> <button className="btn btn-warning" onClick={()=>{
          localStorage.removeItem("cn");
          localStorage.removeItem("cid");
          
          window.location='/'
        }}>Logout</button></li>
        </ul>
      </div>
    </nav>
    {/* banner section end */}
    <div className="banner_section layout_padding">
      <div id="main_slider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="banner_taital">Dedicated<br /> <span style={{color: '#fff'}}>To Support Farmers</span></h1>
                  <p className="banner_text">Latest Loan Services, Latest Schemes & Fertilizers.</p>
                  <div className="read_bt"><NavLink to="about">Read More</NavLink></div>
                </div>
                <div className="col-md-6">
                  <div><img src="images/img-1.png" className="image_1" /></div>
                </div>
              </div>
              <div className="custum_menu">
                <ul>
                  <li className="active"><NavLink to="/home2">Home</NavLink></li>
                  <li><NavLink to="/loan">Loan & Schemes</NavLink></li>
                  <li><NavLink to="/fertilizer">Fertilizers</NavLink></li>
                  <li><NavLink to="/about2">About us</NavLink></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="banner_taital">Dedicated<br /> <span style={{color: '#fff'}}>To Support Farmers</span></h1>
                  <p className="banner_text">Latest Loan Services, Latest Schemes & Fertilizers.</p>
                  <div className="read_bt"><NavLink to="#">Read More</NavLink></div>
                </div>
                <div className="col-md-6">
                  <div><img src="images/img-1.png" className="image_1" /></div>
                </div>
              </div>
              <div className="custum_menu">
                <ul>
                <li className="active"><NavLink to="/home2">Home</NavLink></li>
                <li><NavLink to="/loan2">Loan & Schemes</NavLink></li>
                <li><NavLink to="/fertilizer">Fertilizers</NavLink></li>
                <li><NavLink to="/about2">About us</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    {/* banner section end */}
  </div>
  {/* header section end */}
  {/* services section start */}
  <div className="services_section layout_padding">
    <div className="container">
      <h1 className="services_taital">Overview</h1>
      <div className="services_section_2 layout_padding">
        <div className="row">
          <div className="col-md-4">
            <div className="image_main active">
              <img src="images/img-2.jpg" className="image_2" />
              <h2 className="vegetable_text">Loan</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image_main">
              <img src="images/img-3.png" className="image_2" />
              <h2 className="vegetable_text">Schemes</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image_main">
              <img src="images/img-4.jpg" className="image_2" />
              <h2 className="vegetable_text">Fertilizers</h2>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  {/* services section end */}
  {/* about section start */}
  <div className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="about_main">
            <h1 className="about_taital">About Krishi Kotha</h1>
            <p className="about_text">Its a one stop location for farmers to get information about <br/> latest schemes, different loan services & the best fertilizers.  </p>
            <div className="readmore_bt"><NavLink to="/about2">Read More</NavLink></div>
          </div>
        </div>
        <div className="col-md-6 padding_0">
          <div className="image_7"><img src="images/img-7.png" /></div>
        </div>
      </div>
    </div>
  </div>
  {/* about section end */}
  {/* resources section start */}
  <div className="resources_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="resources_main">
            <h1 className="resources_taital">Resources for Farming</h1>
            <h6 className="resources_taital_1">Go green, go natural....we love to help you!</h6>
            <p className="resources_text">We provide the information on best and natural fertilizers for healthy crops </p>
          </div>
        </div>
        <div className="col-md-6">
          <div><img src="images/img-8.jpg" className="image_8" /></div>
        </div>
      </div>
    </div>
  </div>
  {/* resources section end */}
  {/* choose section star */}
  <div className="choose_section layout_padding">
    <div className="container">
      <h1 className="choose_taital">Services We Provide</h1>
      <p className="choose_text">We are dedicated to help farmers and the farming industry in India grow.</p>
      <div className="choose_section_2 layout_padding">
        <div className="row">
          <div className="col-sm-4">
            <div className="icon_1"><img src="images/icon-1.png" /></div>
            <h2 className="farm_text">Loan Information</h2>
            <p className="dummy_text">All the latest loan schemes for the farmers by government & private companies listed at one spot. </p>
          </div>
          <div className="col-sm-4">
            <div className="icon_1"><img src="images/icon-1.png" /></div>
            <h2 className="farm_text">Latest <br />Schemes</h2>
            <p className="dummy_text">All the lates schemes in favour of farmers are listed here.</p>
          </div>
          <div className="col-sm-4">
            <div className="icon_1"><img src="images/icon-1.png" /></div>
            <h2 className="farm_text">Fertilizer <br/>Guidance</h2>
            <p className="dummy_text">We provide a list for the best fertilizers for different crops.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* choose section end */}
  {/* blog section start */}
  
  {/* blog section end */}
  {/* newsletter section start */}
  
  {/* newsletter section end */}
  {/* client section start */}

  {/* client section end */} 
  {/* footer section start */} 
  <div className="footer_section layout_padding">
    <div className="container">
      <div className="row">
        <div>
          <h2 className="useful_text">contact us</h2>
          <div className="addres_link">
            <ul>
              <li><NavLink to="#"><img src="images/map-icon.png" /><span className="padding_left_10">Kolkata,WB</span></NavLink></li>
              <li><NavLink to="#"><img src="images/call-icon.png" /><span className="padding_left_10">9999888800</span></NavLink></li>
              <li><NavLink to="#"><img src="images/mail-icon.png" /><span className="padding_left_10">krishikotha@gmail.com</span></NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer section end */}  
  {/* copyright section start */}
  <div className="copyright_section">
    <div className="container">
      <p className="copyright_text">Copyright 2024 All Right Reserved By.<NavLink to="https://html.design"> Krishi Kotha</NavLink></p><NavLink to="https://html.design">
      </NavLink></div><NavLink to="https://html.design">
    </NavLink></div><NavLink to="https://html.design">
  </NavLink></div>


     </>
    
    );
  }
  
  export default Home2;