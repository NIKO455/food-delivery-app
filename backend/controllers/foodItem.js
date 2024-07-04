const FoodItem = require('../models/foodItem');
const FoodCategory = require('../models/foodCategory');

async function createFoodItemHandler(req, res) {
    const {categoryId, name, description, image} = req.body;
    try {
        if (!categoryId || !name || !image) {
            return res.status(400).json({
                status: 400,
                message: "Required fields are missing: categoryId, name, and image must be provided."
            });
        }

        let category = await FoodCategory.findOne({_id: categoryId});
        if (!category) {
            return res.status(404).json({status: 404, message: "Category not found with provided ID."});
        }

        await FoodItem.create({
            categoryId,
            name,
            description,
            image
        });

        return res.status(201).json({status: 201, message: "Created food item successfully!"});

    } catch (e) {
        console.error("Failed to create food item:", e);
        return res.status(500).json({status: 500, message: "Internal server error while creating food item."});
    }
}

module.exports = {createFoodItemHandler};
