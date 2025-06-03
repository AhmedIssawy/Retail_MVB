const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const productSchmea = mongoose.schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
      type:Schema.Types.ObjectId,
      ref: 'Category',
    },
    price: {
        type: Number,
        required: true,
    },
    img:{
        type: File,
        required: true,
    }
})

const Proudct = mongoose.model("Proudct", productSchmea);

module.exports = Proudct;