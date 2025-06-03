const mongoose = require('mongoose');
const {Schema} = require("mongoose");


const sale = mongoose.Schema({

    total_amount: {
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ['Placed', 'refunded'],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    products:[{
      type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }],
    edited_at:{
        type: Date,
        default: Date.now,
    }

})