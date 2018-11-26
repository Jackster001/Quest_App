const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const UserSchema=new Schema({
    // picture:{
    //     type:Image
    // },
    avatar:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
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