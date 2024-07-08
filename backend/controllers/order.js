const Order = require('../models/order');
const User = require('../models/user');

const createOrderHandler = async (req, res) => {
    const {email, orderData} = req.body;

    try {
        if (!email || !orderData) {
            return res.status(400).json({
                status: 400,
                message: "Email and Order data are required"
            });
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "Invalid email address"
            });
        }

        await Order.create({
            email,
            orderData
        });

        return res.status(201).json({
            status: 201,
            message: "Order created successfully!"
        });
    } catch (error) {
        console.error("Error creating order:", error);
        return res.status(500).json({
            status: 500,
            message: "Internal server error while creating order."
        });
    }
};

const getAllOrderHandler = async (req, res) => {
    const { email } = req.body;
    try {
        const orders = await Order.find({ email });

        let allOrderData = [];

        orders.forEach(order => {
            allOrderData = allOrderData.concat(order.orderData);
        });


        // console.log(allOrderData)

        return res.status(200).json({
            status: 200,
            message: "Orders fetched successfully",
            orderData: allOrderData
        });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({
            status: 500,
            message: "Internal server error while fetching orders"
        });
    }
};



module.exports = {createOrderHandler,getAllOrderHandler};
