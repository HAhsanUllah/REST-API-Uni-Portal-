var mongoose = require('mongoose');
var adminschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },                          
});

module.exports = mongoose.model('admin',adminschema);