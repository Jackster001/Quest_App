const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const UserSchema=new Schema({
    // picture:{
    //     type:Image
    // },
    avatar:{
        type: String
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
    },
    dateStarted:{
        type: Date,
        default:Date.now
    },
    password:{
        type: String,
        required: true
    }

});

module.exports=User=mongoose.model('users', UserSchema);