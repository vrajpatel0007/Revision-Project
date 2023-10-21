const Order = require("../models/Order");

/**
 * Create Order
 * @param {object} reqBody
 * @returns {Promise<Order>}
 */
const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};
const getOrderList = async (filter, options) => {
  return Order.find()
};
const deleteOrder = async (OrderId) => {
  return Order.findByIdAndDelete(OrderId);
};

const getOrderById = async (OrderId) => {
  return Order.findById(OrderId);
};

/**
 * Order details update by id
 * @param {ObjectId} OrderId
 * @param {object} updateBody
 * @returns {Promise<Order>}
 */
const updateDetails = async (OrderId, updateBody) => {
  return Order.findByIdAndUpdate(OrderId, { $set: updateBody });
};

module.exports = {
  createOrder,
  getOrderList,
  deleteOrder,
  updateDetails,
  getOrderById
};