const mongoose = require('mongoose');

const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
}, {collection: 'pdShop'})
module.exports = {UserSchema: userSchema}