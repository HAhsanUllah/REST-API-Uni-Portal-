var express = require("express");
var router = express.Router();
var student = require('../models/student');
var teacher = require('../models/teacher');
var classs = require('../models/class');

//admin get routes
router.get('/',function(req,res,next){
    res.render('Admin dashboard');
});

router.get('/student',function(req,res,next){
    student.find().exec().then((student)=>{
        res.json(student);
    }).catch((err)=>{
        return(err);
    });
});

router.get('/teacher',function(req,res,next){
    teacher.find().exec().then((teacher)=>{
        res.json(teacher);
    }).catch((err)=>{
        return(err);
    });
});

    router.get('/teacher/:id',function(req,res,next){
    teacher.find({_id:req.params.id}).exec().then((teacher)=>{
        res.json(teacher);
    }).catch((err)=>{
        return(err);
    });
});

router.get('/classes',function(req,res,next){
    classs.find({_id:req.params.id}).populate('teacher').populate('student.sid').exec().then((classs)=>{
        res.json(classs);
    }).catch((err)=>{
        res.send("id not found");
    });
});

//admin post routes

router.post('/addteacher', function(req, res, next) {
    teacher.create(req.body).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    });

}); 

router.post('/addstudent',function(req,res,next){
    student.create(req.body).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    });
});


router.post('/addclasses',function(req,res,next){
    classs.create(req.body).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    });
});

// admin put routes

router.put('/classes/:cid/:tid',function(req,res,next){
    classs.findOneAndUpdate({_id:req.params.cid},{$set:{teacher:req.params.tid}}).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    });
});


router.put('/classes/:cid/:sid',function(req,res,next){
    student.findOneAndUpdate({_id:req.params.cid},{$set:{teacher:req.params.sid}}).then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.json(err);
    });
});


//delete router

router.delete('/delclass',function(req,res,next){
    classs.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result);
    }
    ).catch((err)=>{
        res.json(err);
    });
});

router.delete('/delstudent',function(req,res,next){
    student.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result);
    }
    ).catch((err)=>{
        res.json(err);
    });
});

router.delete('/delteacher',function(req,res,next){
    teacher.deleteOne({_id:req.params.id}).then((result)=>{
        res.json(result);
    }
    ).catch((err)=>{
        res.json(err);
    });
});


module.exports = router;

