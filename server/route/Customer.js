const exp=require("express");
const router=exp.Router();

const bcrypt=require("bcrypt");

const fs=require("fs");

const jwt=require("jsonwebtoken");

const Customer=require("../db/Customer");

router.post("/signup",async (req,res)=>{

    const salt=await bcrypt.genSalt(10);
    const hashp=await bcrypt.hash(req.body.pass,salt)

    var ins={
        cname:req.body.name,
        cnumber:req.body.contact,
        cemail:req.body.email,
        cpass:hashp,
     
    }
   await Customer.create(ins);
   
   res.json({msg:"signup done"});
});

router.post("/login",async (req,res)=>{

var e=req.body.email;
var p=req.body.pass;

var data=await Customer.findOne({cemail:e});

if(data!=null){

    bcrypt.compare(p,data.cpass,(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result==true){
                var udata={
                    email:data.cemail,
                    name:data.cname,
                    id:data._id
                };

                var jtoken=jwt.sign(udata,"dfghjk");
                res.json(udata);

            }else{
                res.json({msg:"Invalid Login"});
            }
        }
    })

}else{

    res.json({msg:"Invalid Login"});
}


console.log(data);


});


    

module.exports=router;