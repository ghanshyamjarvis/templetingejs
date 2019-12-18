const express = require ('express');

const router = express.Router();

const appaction =require("../action/appaction")

router.get('/',appaction.home)
router.get('/elements',appaction.elements)
router.get('/generic',appaction.generic)


module.exports=router