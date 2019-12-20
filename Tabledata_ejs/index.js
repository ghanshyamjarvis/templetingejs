const express =require ("express")
const app =express()
const path = require("path")
const ejs = require("ejs")


//set view engine EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'/views'))


app.get("/",function (req,res) {
  res.render('main')
});

app.listen(3000,function () {
  console.log("Using 3000 Port")
})