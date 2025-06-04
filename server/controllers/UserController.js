const mongoose = require("mongoose")
import User from "../models/User";
const jwt = require('jsonwebtoken');

exports.AddUser = async (req, res, next) => {

    try {
        const {name, email, password, phoneNumber} = req.body;

        // Check if User exists
        const existing_user = User.find({
            name: name,
            email: email,
        })
        if (existing_user) {
            console.error("User already exists");
            return res.status(400).json("User already exists");
        }

        const newUser = new User({name, email, password, phoneNumber});
        await newUser.save();

        const token = newUser.generateAuthToken();

        // omit the password from the response
        const {password: _, ...userData} = newUser._doc;

        res.status(201).json({...userData, token});
    }
    catch (err) {
        next(err);
    }

}
exports.ReadUser = async (req, res) => {
    try{
        const {email,password} = req.body;
        const User = await User.findOne({email:email});
        if (!User) {
            res.status(404).json("User not found");
        }
        const isMatch = User.comparePassword(password, User.password);
        if (!isMatch) {
            res.status(400).json("Invalid Credentials");
        }
        const token = User.generateAuthToken();
        res.status(200).json({token});

    }
    catch (err) {
        next(err);
    }
}