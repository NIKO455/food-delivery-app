const {Schema, model} = require('mongoose')

const foodCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const FoodCategory = model('food_category', foodCategorySchema);

module.exports = FoodCategory