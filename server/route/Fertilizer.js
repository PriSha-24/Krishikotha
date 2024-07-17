const exp=require("express");
const router=exp.Router();

const fs=require("fs");

const jwt=require("jsonwebtoken");

const Crop=require("../db/Fertilizer_tbl");

router.get("/tel",async (req,res)=>{
   
var data=await Crop.find();

res.json(data);

});



router.post("/del",async (req,res)=>{

    var id=req.body.pid;
   
     var data=await Crop.findById(id);

     var img=data.crop_image;
     await fs.unlinkSync("./public/fertilizer_img/"+img);

   await Crop.findByIdAndDelete(id);


   res.json({msg:"deleted"});
   
    
    });


router.post("/ins",async (req,res)=>{

    var objimg=req.files.fimg;
    var pn=objimg.name;

    objimg.mv("./public/fertilizer_img/"+pn,async (err)=>{
        if(err){
            throw err;
        }else{

            var insobj={
                crop_name:req.body.name,
                crop_details:req.body.fd,
                crop_image:pn,
                crop_cat:req.body.cat
            
            };

        await Crop.create(insobj);


            
            res.json({msg:"Submited"});

        }
    })
});


router.post("/edit",async (req,res)=>{
   
    var id=req.body.id;
    var data=await Crop.findById(id);
    
    res.json(data);
    
    });



router.post("/upd",async (req,res)=>{

    var id=req.body.id;

     if(req.files!=null){
        var objimg=req.files.fimg;
        var pn=objimg.name;
    
        objimg.mv("./public/fertilizer_img/"+pn,async (err)=>{
            if(err){
                throw err;
            }else{
    
                var insobj={
                    crop_name:req.body.name,
                    crop_details:req.body.fd,
                    crop_image:pn,
                    crop_cat:req.body.cat
                
                };
    
            await Crop.findByIdAndUpdate(id,insobj);
    
    
                
                res.json({msg:"Submited"});
    
            }
        });

    }else{

        
        var insobj={
            crop_name:req.body.name,
            crop_details:req.body.fd,
            crop_cat:req.body.cat
        
        };

    await Crop.findByIdAndUpdate(id,insobj);


        
        res.json({msg:"Submited"});
    }


    });
    

module.exports=router;