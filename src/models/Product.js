const mongoose = require("mongoose");
const config = require("../config/config");


const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_imag: {
            type: String,
            trim: true,
        },
        price: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.product_imag) {
                    data.product_imag = `${config.base_url}product_images/${data.product_imag}`;
                }
            },
        },
    }
);

const product = mongoose.model("prodct", productSchema);
module.exports = product;