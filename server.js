var express=require('express');
var app=express();
var port=process.env.PORT ||3000;

app.get('/',function(req,res){
  res.sendFile(__dirname+'/frontend/html/index.html');
});
app.use(express.static(__dirname+'/frontend'))
app.listen(port,function(){
   console.log("site running on http://localhost:"+port);
});


