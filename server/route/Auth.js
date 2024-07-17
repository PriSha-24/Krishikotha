const exp=require("express");
const router=exp.Router();

const bcrypt=require("bcrypt");

const fs=require("fs");

const jwt=require("jsonwebtoken");

const Admin=require("../db/Admin");

router.post("/signup",async (req,res)=>{

    const salt=await bcrypt.genSalt(10);
    const hashp=await bcrypt.hash(req.body.pass,salt)

    var ins={
        aname:req.body.name,
        anumber:req.body.contact,
        aemail:req.body.email,
        apass:hashp,
     
    }
   await Admin.create(ins);
   
   res.json({msg:"signup done"});
});

router.post("/login",async (req,res)=>{

var e=req.body.email;
var p=req.body.pass;

var data=await Admin.findOne({aemail:e});

if(data!=null){

    bcrypt.compare(p,data.apass,(err,result)=>{
        if(err){
            throw err;
        }else{
            if(result==true){
                var udata={
                    email:data.aemail,
                    name:data.aname,
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