const mongoose = require('mongoose');

const pschema=mongoose.Schema({
    scheme_name:String,
    scheme_details:String,
    scheme_image:String,
    scheme_cat:String

});

module.exports=mongoose.model("Scheme",pschema);