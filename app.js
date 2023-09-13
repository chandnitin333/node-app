var express = require("express");

const app =  express();

app.get('/',function(req,res){
    res.send('Hello world form AWS FARGET')
})

app.listen(80,function(){
    console.log("App listening on port 80 ::")
})