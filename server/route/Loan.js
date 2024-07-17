const exp=require("express");
const router=exp.Router();

const fs=require("fs");

const jwt=require("jsonwebtoken");

const Loan=require("../db/Loan_tbl");

router.get("/tel",async (req,res)=>{
   
var data=await Loan.find();

res.json(data);

});



router.post("/del",async (req,res)=>{

    var id=req.body.pid;
   
     var data=await Loan.findById(id);

     var img=data.loan_image;
     await fs.unlinkSync("./public/loan_img/"+img);

   await Loan.findByIdAndDelete(id);


   res.json({msg:"deleted"});
   
    
    });


router.post("/ins",async (req,res)=>{

    var objimg=req.files.limg;
    var pn=objimg.name;

    objimg.mv("./public/loan_img/"+pn,async (err)=>{
        if(err){
            throw err;
        }else{

            var insobj={
                loan_name:req.body.name,
                loan_details:req.body.ld,
                loan_image:pn,
                loan_cat:req.body.cat
            
            };

        await Loan.create(insobj);


            
            res.json({msg:"Submited"});

        }
    })
});


router.post("/edit",async (req,res)=>{
   
    var id=req.body.id;
    var data=await Loan.findById(id);
    
    res.json(data);
    
    });



router.post("/upd",async (req,res)=>{

    var id=req.body.id;

     if(req.files!=null){
        var objimg=req.files.limg;
        var pn=objimg.name;
    
        objimg.mv("./public/loan_img/"+pn,async (err)=>{
            if(err){
                throw err;
            }else{
    
                var insobj={
                    loan_name:req.body.name,
                    loan_details:req.body.ld,
                    loan_image:pn,
                    loan_cat:req.body.cat
                
                };
    
            await Loan.findByIdAndUpdate(id,insobj);
    
    
                
                res.json({msg:"Submited"});
    
            }
        });

    }else{

        
        var insobj={
            loan_name:req.body.name,
            loan_details:req.body.ld,
            loan_cat:req.body.cat
        
        };

    await Loan.findByIdAndUpdate(id,insobj);


        
        res.json({msg:"Submited"});
    }


    });
    

module.exports=router;