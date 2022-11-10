const mongoose = require('mongoose');

const Schema = mongoose.Schema

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    }
})

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        require: true,
        default: 0
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    stock: {
        type: Number,
        require: true,
        default: 0
    }
}, {collection: 'pdShop'})

const User = mongoose.model("User", userSchema)

module.exports = {ProductSchema: productSchema}