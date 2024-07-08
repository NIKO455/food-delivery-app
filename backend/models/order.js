const {Schema, model} = require('mongoose');

const orderSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    orderData: {
        type: Array,
        required: true,
    }
}, {timestamps: true});

const Order = model('order', orderSchema);

module.exports = Order;
