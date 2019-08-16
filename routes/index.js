const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const Product = new require('../models/product');

// Welcome Page
router.get('/',(req,res)=>{
  res.redirect('product')
})

router.get('/result',function(req,res){
  Product.find({}).exec(function(err, result){
    res.send(result);
  })
})



module.exports = router;
