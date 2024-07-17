const mongoose = require('mongoose');

const pschema=mongoose.Schema({
    aname:String,
    anumber:Number,
    aemail:String,
    apass:String,
 
});

module.exports=mongoose.model("Admin",pschema);