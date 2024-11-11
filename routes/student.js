var express = require("express");
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('Student dashboard');
});

router.get('/viewquiz',function(req,res,next){
    quiz.find().exec().then((result)=>{
        res.json(result);
    }).catch((err)=>{
        return(err);
    });
});


module.exports = router;