const express =require ("express");
const app =express();
const path = require("path");
const router =express.Router();

const engine = require('ejs-locals');

router.use("/",require('./controller/control'))

app.use("/",router)


// set the view engine to ejs

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));



app.set('view options', {layout: 'layout'});

app.listen(3000,function ()
{
  console.log("Using Port 3000")
})
