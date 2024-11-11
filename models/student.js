var mongoose = require('mongoose');
var studentschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },  
    
    rollno:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model('student',studentschema);