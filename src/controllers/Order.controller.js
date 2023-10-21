const { OrderService } = require("../services")

const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;

        const Order = await OrderService.createOrder(reqBody);
        if (!Order) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Order create successfully!",
            data: { Order },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
/** Get Order list */
const getOrderList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { first_name: { $regex: search, $options: "i" } },
                { last_name: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await OrderService.getOrderList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get Order list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//   delete Order
const deleteOrder = async (req, res) => {
    try {
        const OrderId = req.params.OrderId;
        const OrderExists = await OrderService.deleteOrder(OrderId);
        if (!OrderExists) {
            throw new Error("Order not found!");
        }

        await OrderService.deleteOrder(OrderId);

        res.status(200).json({
            success: true,
            message: "Order delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
//  update Order
const updateDetails = async (req, res) => {
    try {
        const OrderId = req.params.OrderId;
        const OrderExists = await OrderService.getOrderById(OrderId);
        if (!OrderExists) {
            throw new Error("Order not found!");
        }

        await OrderService.updateDetails(OrderId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Order details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {
    createOrder,
    getOrderList,
    deleteOrder,
    updateDetails
};