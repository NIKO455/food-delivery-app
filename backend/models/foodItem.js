const { Schema, model } = require('mongoose');

const foodItemSchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'food_category',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const FoodItem = model('food_item', foodItemSchema);

module.exports = FoodItem;
