const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const product = mongoose.schema({
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