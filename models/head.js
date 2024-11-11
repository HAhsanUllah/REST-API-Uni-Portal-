var mongoose = require('mongoose');
var headschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },                          
});

module.exports = mongoose.model('head',headschema);