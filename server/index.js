const exp=require("express");
const app=exp();

const cors=require("cors");
app.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Ankit:A123456@cluster0.w9jlh1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
app.use(exp.static('public'));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const exf=require("express-fileupload");
app.use(exf());


const ln=require('./route/Loan');

const sh=require('./route/Scheme');

const cr=require('./route/Fertilizer');

const ar=require('./route/Auth');

const cs=require('./route/Customer');

app.get("/",(req,res)=>{
    res.send("Hello Node");
});

app.post("/ins",(req,res)=>{

    console.log(req.body)
    res.json({msg:"Submited"});

});

app.use("/loan",ln);
app.use("/scheme",sh);
app.use("/fertilizer",cr);
app.use("/auth",ar);
app.use("/customer",cs);
app.listen(2000)