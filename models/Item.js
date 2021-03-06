const mongoose= require('mongoose');
const Schema= mongoose.Schema;

//create schema
const ItemSchema= new Schema({
    question:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    answer:{
        type: String}
    ,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports=Item=mongoose.model('item', ItemSchema);