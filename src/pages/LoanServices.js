import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function LoanServices(){
let[prd, setPrd] = useState([]);
async function getLoan(){
var data =await fetch("http://localhost:2000/loan/tel");
var resultset= await data.json();
setPrd(resultset);}useEffect(()=>{getLoan();},[])
return(<>
<div className="container-fluid">
<div className="container-fluid">
<div className="row"><div className="col-md-3"><div class="sidenav">
<NavLink to="/home2">Home</NavLink>
<NavLink to="/loan-services">Loan Services</NavLink>
<NavLink to="/schemes">Latest Schemes</NavLink>
<NavLink to="/fertilizer">Crops</NavLink>
</div></div></div></div>
<div className = "container">
<div className="row mproduct" style={{paddingLeft:200}}>{prd.map((k)=>
<div className="col-md-4" style={{paddingBottom:50}}><div class="card" >
<img className="card-img-top" src={"http://localhost:2000/loan_img/"+k.loan_image} alt="Card image" />
<div className="card-body"><h4 className="card-title">{k.loan_name}</h4>
<p className="p1"> <NavLink href="#" className="btn btn-warning"data-bs-toggle="modal" data-bs-target={"#seeInfo"+k._id}>Loan Info</NavLink> </p>
</div></div><div class="modal" id={"seeInfo"+k._id}>
<div class="modal-dialog"><div class="modal-content"><div class="modal-header">
<h4 class="modal-title">{k.loan_name}</h4>
<button type="button" class="btn-close" data-bs-dismiss="modal"></button></div>
<div class="modal-body">
<div className="container"><h4>{k.loan_details}</h4></div></div>
<div class="modal-footer">
<button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
</div></div></div></div></div>)}</div></div>
<p className="footer">cOPYRIGHT@2024 BY HERITAGE</p></div></>)}
export default LoanServices;