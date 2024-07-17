import { useState } from "react";

function Add(){

    let[pname,setPname]=useState("");
    let[pprice,setPprice]=useState("");
    let[pdetails,setPdetails]=useState("");
    let[pcat,setPcat]=useState("");

    return(
     <>
     <div className="container">
     <p>Category</p>
     <p>
     <select onChange={(ev)=>{
        setPcat(ev.target.value)

     }}>
     <option value="">-Select Category-</option>
     <option value="Grocery">Grocery</option>
     <option value="Electronics">Electronics</option>

     </select>
     </p>
     <p>Name</p>
     <p><input type="text" onChange={(ev)=>{
        setPname(ev.target.value)

     }} /></p>
     <p>Price</p>
     <p><input type="text" onChange={(ev)=>{
        setPprice(ev.target.value)

     }} /></p>
     <p>Details</p>
     <p><textarea onChange={(ev)=>{
        setPdetails(ev.target.value)

     }}></textarea></p>

     <p><button onClick={async ()=>{
      //   console.log(pcat)
      //   console.log(pname)
      //   console.log(pprice)
      //   console.log(pdetails)

      var fd=new FormData();
      fd.append("name",pname);
      fd.append("cat",pcat);
      fd.append("price",pprice);
      fd.append("pd",pdetails);
      var resp=await fetch("http://localhost:2000/ins",{
         method:'POST',
         body:fd

      });
      var data=await resp.json();
      console.log(data);


     }}>Add Product</button></p>
     </div>
      </>
     
    );
 
 }
 
 export default Add;


