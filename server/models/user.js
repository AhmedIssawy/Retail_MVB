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
    }
    },{ timestamps: true })

userSchema.methods.generateAuthToken = function() {
    return jwt.sign(
        {
            userId: this._id,
            username: this.username,
            role: this.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;