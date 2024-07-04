const FoodCategory = require('../models/foodCategroy')

async function createFoodCategoryHandler(req, res) {
    const {name} = req.body;
    try {
        if (!name) {
            return res.status(400).json({status: 400, message: "Some fields are missing!"});
        }

        await FoodCategory.create({
            name
        })

        return res.status(201).json({status: 201, message: "Food category created successfully!"});

    } catch (e) {
        return res.status(500).json({status: 500, message: "Some error has occurred!"})
    }
}

module.exports = {createFoodCategoryHandler}