var express = require('express');
var path = require('path');
var mongo = require('mongoose');
var bodyParser = require('body-parser');

var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err,response){
    if(err){ console.log(err); }
    else{ console.log('connected to ' + db , '+',response); }
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended : true}));

app.use(( req ,res,next) =>{
    res.sendHeader('Acces-Conrtol-Allow-Origin','http://localhost:4200');
    res.sendHeader('Acces-Conrtol-Allow-Methods','GET ,POST, OPTIONS ,PUT, PATCH, DELETE');
    res.sendHeader('Acces-Conrtol-Allow-Headers','X-Requested,Content-Type');
    res.sendHeader('Acces-Conrtol-Allow-Credentials',true);
    next();
});

var Schema = mongo.Schema;

var UserSchema = new Schema({
    name: { type : String },
    address: { type : String },
},{ versionKey: false });

var model = mongo.model('users',UserSchema,'users');

///user save ho ra he yaha se

app.post("/api/saveUser", (req,res)=>{
    var mod = new model(req.body);
    if(req.body.mode == "Save")
    {
        mod.save((err,data)=>{
            if(err){
                res.send(err);
            }
            else{
                req.send({ data: "record have been saved..." });
            }
        });
    }
    else{
        model.findByIdAndUpdate(req.body.id, { name: req.body.name, address : req.body.address },
            (err,data)=>{
                if(err){
                    res.send(err);
                }
                else{
                    res.send({data: "record updated"});
                }
            });
         }
}) //yaha band karna hai


// user delete ho ra he..

app.post("/api/deleteUser",(req,res)=>{
    model.remove({_id : req.body.id },(err)=>{
        if(err){
            res.send(err);
        }
        else{
            req.send({data: "record have been deleted..."});
        }
    });
})

// yaha se user ki list aa ri he
app.get("/api/getUser",(req,res)=>{
    model.find({},(err,data)=>{
        if(err){
            res.send(err);
        }
        else{
            req.send({data});
        }
    });
});


//yaha se listen ho ra he
app.listen(8080,()=>{
    console.log('example app listen on port 8080');
});
