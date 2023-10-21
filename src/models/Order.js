const mongoose = require("mongoose")

const orderschema = new mongoose.Schema(
    {
        c_name: {
            type: String,
            trim: true,
        },
        c_email: {
            type: String,
            trim: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        orderDate: {
            type: Date,
            default: null,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product',
        }
    }
)