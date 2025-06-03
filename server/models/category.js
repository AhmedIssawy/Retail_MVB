const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const category_Schema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
})


const Category = mongoose.model("Category", category_Schema);