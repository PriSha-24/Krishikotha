const exp=require("express");
const router=exp.Router();

const fs=require("fs");

const jwt=require("jsonwebtoken");

const Scheme=require("../db/Scheme_tbl");

router.get("/sel",async (req,res)=>{
   
var data=await Scheme.find();

res.json(data);

});



router.post("/del",async (req,res)=>{

    var id=req.body.pid;
   
     var data=await Scheme.findById(id);

     var img=data.scheme_image;
     await fs.unlinkSync("./public/scheme_img/"+img);

   await Scheme.findByIdAndDelete(id);


   res.json({msg:"deleted"});
   
    
    });


router.post("/ins",async (req,res)=>{

    var objimg=req.files.pimg;
    var pn=objimg.name;

    objimg.mv("./public/scheme_img/"+pn,async (err)=>{
        if(err){
            throw err;
        }else{

            var insobj={
                scheme_name:req.body.name,
                scheme_details:req.body.pd,
                scheme_image:pn,
                scheme_cat:req.body.cat
            
            };

        await Scheme.create(insobj);


            
            res.json({msg:"Submited"});

        }
    })
});


router.post("/edit",async (req,res)=>{
   
    var id=req.body.id;
    var data=await Scheme.findById(id);
    
    res.json(data);
    
    });



router.post("/upd",async (req,res)=>{

    var id=req.body.id;

     if(req.files!=null){
        var objimg=req.files.pimg;
        var pn=objimg.name;
    
        objimg.mv("./public/scheme_img/"+pn,async (err)=>{
            if(err){
                throw err;
            }else{
    
                var insobj={
                    scheme_name:req.body.name,
                    scheme_details:req.body.pd,
                    scheme_image:pn,
                    scheme_cat:req.body.cat
                
                };
    
            await Scheme.findByIdAndUpdate(id,insobj);
    
    
                
                res.json({msg:"Submited"});
    
            }
        });

    }else{

        
        var insobj={
            scheme_name:req.body.name,
            scheme_details:req.body.pd,
            scheme_cat:req.body.cat
        
        };

    await Scheme.findByIdAndUpdate(id,insobj);


        
        res.json({msg:"Submited"});
    }


    });
    

module.exports=router;