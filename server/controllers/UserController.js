const mongoose = require("mongoose")
import User from "../models/User";








exports.AddUser = async (req, res, next) => {
    const { name, email, password,phoneNumber } = req.body;

    // Check if User exists
    const existing_user = User.find({
        name: name,
        email: email,
    })
    if (existing_user) {
        console.error("User already exists");
        return res.status(400).json("User already exists");
    }

    const newUser = new User({name ,email,password,phoneNumber});
    await newUser.save();
    res.status(200).json(newUser);
}