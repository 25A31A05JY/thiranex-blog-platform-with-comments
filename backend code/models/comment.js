const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment:String,
    postId:String,
    userId:String
});

module.exports = mongoose.model('Comment', CommentSchema);
