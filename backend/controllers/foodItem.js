const FoodItem = require('../models/foodItem');
const FoodCategory = require('../models/foodCategory');

async function createFoodItemHandler(req, res) {
    const {categoryId, name, price, description, image} = req.body;
    try {
        if (!categoryId || !name || !image || !price) {
            return res.status(400).json({
                status: 400,
                message: "Required fields are missing: categoryId, name, price, and image must be provided."
            });
        }

        let category = await FoodCategory.findOne({_id: categoryId});
        if (!category) {
            return res.status(404).json({status: 404, message: "Category not found with provided ID."});
        }

        await FoodItem.create({
            categoryId,
            name,
            price,
            description,
            image
        });

        return res.status(201).json({status: 201, message: "Created food item successfully!"});

    } catch (e) {
        return res.status(500).json({status: 500, message: "Internal server error while creating food item."});
    }
}

async function getAllFoodItemHandler(req, res) {
    try {
        let users = await FoodItem.find({}).populate('categoryId');
        return res.status(200).json({status: 200, message: "Fetched food items successfully!", data:users});
    } catch (e) {
        console.log(e)
        return res.status(500).json({status: 500, message: "Internal server error while creating food item."});
    }
}

module.exports = {createFoodItemHandler, getAllFoodItemHandler};
