var mongoose = require('mongoose');
var teacherschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },  
    
    designation:{
        type:String,
        required:true
    },
    
});

module.exports = mongoose.model('teacher',teacherschema);