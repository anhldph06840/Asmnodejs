var express = require('express');
var router = express.Router();
const Product = new require('../models/product');
const Users = new require('../models/userlogin');
/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find({}).then((doc)=>{
       
        res.render('product', { item: doc });
    })
    
  });


  
// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });
  
 

  /* GET re page. */

  router.post('/postproduct', function(req, res, next) {
 const {name,type,url,infor,cost}=req.body

    const product = new Product({name:name,type:type,url:url,infor:infor,cost:cost});
    product.save();
    
    res.redirect('/');
  });

  router.get('/delete',function(req,res){
      var id = req.query.id
      res.redirect('/product')
      const product = new Product({_id:id})
      product.remove();
      console.log(id);
  })
  
  router.get('/edit',function(req,res){ 
      var id = req.query.id
      Product.findOne({_id:id}).then((doc)=>{
          console.log(doc);
          res.render('edit',{item:doc});
      })
       

  })
  router.post('/editproduct',function(req,res){
    const {id,name,type,url,infor,cost}=req.body
    Product.findOneAndUpdate({_id:id},{name:name,type:type,url:url,infor:infor,cost:cost},{new:true}).then((doc)=>{
        console.log(doc); 
        res.redirect('/product')
    })
  })



module.exports = router;