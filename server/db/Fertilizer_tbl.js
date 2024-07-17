const mongoose = require('mongoose');

const pschema=mongoose.Schema({
    crop_name:String,
    crop_details:String,
    crop_image:String,
    crop_pdf:String,
    crop_cat:String

});

module.exports=mongoose.model("Crop",pschema);