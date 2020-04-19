const express = require("express");
const app = express();

const https=require("https");


app.get("/" , function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=5f4440c576ae62700bf41f75b6179c6f&units=metric";

  https.get(url , function(response){
    console.log(response.statusCode);

    response.on("data" , function(data){
      const wdata=JSON.parse(data);
      const temp=wdata.main.temp;
      const 
      res.send("<h1>Temperatue of your city is "+ temp +" degree celcius</h1>" );


    });

  });

});









app.listen(3000,function(){
  console.log("server is listening on port 3000");
});
