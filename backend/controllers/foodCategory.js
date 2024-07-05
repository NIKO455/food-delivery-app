const FoodCategory = require('../models/foodCategory')
const FoodItem = require("../models/foodItem");

async function getAllFoodCategoryHandler(req, res) {
    try {
        let categories = await FoodCategory.find({});
        return res.status(200).json({status: 200, message: "Fetched food items successfully!", data: categories});
    } catch (e) {
        console.log(e)
        return res.status(500).json({status: 500, message: "Internal server error while creating food item."});
    }
}

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


module.exports = {createFoodCategoryHandler, getAllFoodCategoryHandler}