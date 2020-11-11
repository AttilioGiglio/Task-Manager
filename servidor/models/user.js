// import mongoDB, because I am using a mongo method to create the model
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    password: {
        type:String,
        required: true,
        trim: true
    },
    register: {
        type:Date,
        required:true,

    }
});

module.exports = mongoose.model('User', UserSchema)