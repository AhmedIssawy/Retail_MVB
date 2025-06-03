const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        enum:['App-admin','Store-admin','Sales'],
        default: 'Store Admin',
    },
    updatedAt:
        {
            type: [Date]
        },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;