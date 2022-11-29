var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  
  try{
    return res.json({status:true,message:"kerim",data:[{a:2,b:251},{a:55,b:1}]})
  }catch(error){
    return res.status(500).send({status:false,errorMessage:"Internal Server Error"})
  }

});

router.get('/submit', function(req, res, next) {
  
  try{
    return res.json({status:true,message:"submit yeri!!"})
  }catch(error){
    return res.status(500).send({status:false,errorMessage:"Internal Server Error"})
  }

});

module.exports = router;
