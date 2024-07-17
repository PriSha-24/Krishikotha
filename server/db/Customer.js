const mongoose = require('mongoose');

const pschema=mongoose.Schema({
    cname:String,
    cnumber:Number,
    cemail:String,
    cpass:String,
 
});

module.exports=mongoose.model("Customer",pschema);