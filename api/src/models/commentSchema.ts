import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    blogId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Blog',
        required : true
    },
    commentBy : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "User",
        required : true
    },
    comment : {
        type : String,
        required : true
    }
},{
    timestamps : true
})