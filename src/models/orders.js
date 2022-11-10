const mongoose = require('mongoose');

const Schema = mongoose.Schema
const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "user",   
    },
    orderItems: [{
        name: { type: String, required: true},
        qty: { type: String, required: true},
        price: { type: Number, required: true},
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "product"
        },
    }],
    shippingAddress: {
        address: { type: String, required: true},
        city: { type: String, required: true},
        postalCode: { type: String, required: true},
        county: { type: String, required: true}
    },
    paymentMethod: {
        type: String,
        required: true,
        default: "Paypal"
    },
    paymentResult: {
        id: { type: String},
        status: { type: String},
        update_time: { type: String},
        email_address: { type: String}
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, {collection: 'pdShop'})

const User = mongoose.model("User", userSchema)

module.exports = {OrderSchema: orderSchema}