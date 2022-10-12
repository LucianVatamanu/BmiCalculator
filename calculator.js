const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Suma este " + result);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html")
});

app.post("/bmicalculator",function(req,res){
  var numar1= parseFloat(req.body.weight);
  var numar2= parseFloat(req.body.height);
  var result= numar1 / (numar2 * numar2);
  res.send("your bmi is "+ result);

});
app.listen(3000, function() {
  console.log("Server has started at port 3000")
});
