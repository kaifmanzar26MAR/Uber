const userModel = require("../models/user.model.js");
const userService = require("../services/user.service.js");

//*Register a user
const registerUser = async (req, res) => {
    try {

        //*Check if user details are provided
        if(!req.body) {
            throw new Error("Please provide user details");
        }

       //*Add validation for the required data
        const { firstname, lastname, email, password } = req.body;
        if (!firstname || !email || !password || firstname.trim() === "" || email.trim() === "" || password.trim() === "") {
            throw new Error("All fields are required");
        }

        //*Create a user
        const user = await userService.createUser({
            firstname,
            lastname,
            email,
            password,
        });

        //*Check if user is created
        if(!user) {
            throw new Error("Something went wrong in user registration!");
        }

        //*Generate token
        const token = user.generateAuthToken();

        //*send response
        res.status(201).json({ message: "User registered successfully", user, token });
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { registerUser };