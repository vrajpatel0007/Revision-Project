const express = require("express");
const userRoute = require("./user.route");
const product = require("./product.route")
const Order = require("./Order.route")

const router = express.Router();

router.use("/user", userRoute);
router.use("/product", product);
router.use("/Order", Order);
module.exports = router;