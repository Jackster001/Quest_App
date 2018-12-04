const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const questionProfileSchema=new Schema({
    question: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    text: {
        type: String,
    },
    comments:[
        {
            users:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String,
            },
            avatar:{
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }

        }
    ],
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports=Post=mongoose.model('questionProfile', questionProfileSchema);