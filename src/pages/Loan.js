import { NavLink } from "react-router-dom";
function Loan() {
return (<>
<div><div className="container-fluid">
<div className="row ">
<div className="col-md-2 "><div class="sidenav">      
  <NavLink to="/home2">Home</NavLink>
  <NavLink to="/loan-services">Loan Services</NavLink>
  <NavLink to="/schemes">Latest Schemes</NavLink>
  <NavLink to="/fertilizer">Crops</NavLink></div></div>
<div className="col-md-10 ">
<div className="choose_section layout_padding">
<div className="container">
<h1 className="choose_taital">Services We Provide</h1>
<p className="choose_text">We are dedicated to help farmers and the farming industry in India grow.</p>
<div className="choose_section_2 layout_padding">
<div className="row"><div className="col-sm-4">
<div className="icon_1"><img src="images/icon-1.png" /></div>
<h2 className="farm_text">Loan Information</h2>
<p className="dummy_text">All the latest loan schemes for the farmers by government & private companies listed at one spot. </p>
</div><div className="col-sm-4">
<div className="icon_1"><img src="images/icon-1.png" /></div>
<h2 className="farm_text">Latest <br />Schemes</h2>
<p className="dummy_text">All the lates schemes in favour of farmers are listed here.</p>
</div><div className="col-sm-4">
<div className="icon_1"><img src="images/icon-1.png" /></div>
<h2 className="farm_text">Fertilizer <br/>Guidance</h2>
<p className="dummy_text">We provide a list for the best fesrtilizers for different crops.</p>
</div></div></div></div></div></div></div></div>
<p className="footer">cOPYRIGHT@2024 BY HERITAGE</p></div></>);}
export default Loan;