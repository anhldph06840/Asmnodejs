var express = require('express');
var router = express.Router();
const Users = new require('../models/userlogin');

  //User
  router.get('/',function(req,res){
    Users.find({}).then((doc)=>{
      console.log(doc);
      res.render('users',{item:doc})
    })
   // res.send('g')
  })
//delete user
router.get('/deleteuser',function(req,res){
  var id = req.query.id
  res.redirect('/user')
  const user = new Users({_id:id})
  user.remove();
  console.log(id);
})

router.get('/edit',function(req,res){ 
    var id = req.query.id
    Users.findOne({_id:id}).then((doc)=>{
        console.log(doc);
      //  res.send(doc)
       res.render('edituser',{item:doc});
    })
     

})
router.post('/edituser',function(req,res){
  const {id,name,type,url,infor,cost}=req.body
  Users.findOneAndUpdate({_id:id},{name:name,type:type,url:url,infor:infor,cost:cost},{new:true}).then((doc)=>{
      console.log(doc); 
      res.redirect('/user')
  })
})
   

module.exports=router