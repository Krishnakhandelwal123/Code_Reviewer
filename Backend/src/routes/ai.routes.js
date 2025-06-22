const express=require('express');
const aiController=require('../controllers/ai.controller');
const router=express.Router();


router.post('/getreview',aiController.getReview);
 
  

module.exports=router;