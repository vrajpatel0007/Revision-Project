const express = require("express");
const { Ordervalidtion } = require("../../validations")
const { OrderController } = require("../../controllers")
const validate = require("../../middlewares/validate")
const router = express.Router();

router.post(
  "/create-Order",
  validate(Ordervalidtion.createOrder),
  OrderController.createOrder
)

/** Get Order list */
router.get(
  "/list",
  validate(Ordervalidtion.getOrderList),
  OrderController.getOrderList
);

/** Delete Order */
router.delete(
  "/delete-Order/:OrderId",
  validate(Ordervalidtion.getDetails),
  OrderController.deleteOrder
);
router.put(
  "/update-details/:OrderId",
  validate(Ordervalidtion.updateDetails),
  OrderController.updateDetails
);


module.exports = router;