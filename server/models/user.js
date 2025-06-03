const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
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

const User = mongoose.model("User", userSchema);

module.exports = User;