const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    location:{
      type: String,
    },
    avatar: {
        type: String,
        require: true,
    }
}, {timestamps: true})

const User = model('user', userSchema);

module.exports = User