const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const UserSchema=new Schema({
    picture:{
        type:Image
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type: email,
        required:true
    },
    rating:{
        type: Number,
    },
    dateStarted:{
        type: Date,
        default:Date.now
    }

});

module.exports=User=mongoose.model('user', UserSchema);