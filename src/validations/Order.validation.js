const Joi = require("joi")


const createOrder = {
  body: Joi.object().keys({
    c_name: Joi.string().required().trim(),
    c_email: Joi.string().required().trim().email(),
    totalAmount: Joi.string().required().trim(),
    orderDate: Joi.string().required().trim(),
  })
}
/** GEt Order list */
const getOrderList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

const updateDetails = {
  params: Joi.object().keys({
    OrderId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    c_name: Joi.string().trim(),
    c_email: Joi.string().trim(),
    totalAmount: Joi.string().trim(),
    orderDate: Joi.string().trim(),
  }),
};

/** Get Order details by id */
const getDetails = {
  params: Joi.object().keys({
    OrderId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createOrder,
  getOrderList,
  updateDetails,
  getDetails
}