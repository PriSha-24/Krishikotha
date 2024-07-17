const mongoose = require('mongoose');

const pschema=mongoose.Schema({
    loan_name:String,
    loan_details:String,
    loan_image:String,
    loan_cat:String

});

module.exports=mongoose.model("Loan",pschema);