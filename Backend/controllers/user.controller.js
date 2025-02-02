const userModel = require("../models/user.model.js");
const userService = require("../services/user.service.js");
const blacklistTokenSchema = require("../models/blacklistToken.model.js");
const { validateEmail } = require("../utils/validation.utils.js");

//*Register a user
const registerUser = async (req, res) => {
    try {

        //*Check if user details are provided
        if(!req.body) {
            throw new Error("Please provide user details");
        }

       //*Add validation for the required data
        let { firstname, lastname, email, password } = req.body;
        if (!firstname || !email || !password || firstname.trim() === "" || email.trim() === "" || password.trim() === "") {
            return res.status(401).json({ message: "All fields are required!" });
        }

        //*trimming data 
        firstname = firstname.trim();
        lastname = lastname.trim();
        email = email.trim();
        password = password.trim();

        if(firstname.length < 3) {
            return res.status(401).json({ message: "Firstname must be at least 3 characters long!" });
        }
        if(lastname.length < 3) {
            return res.status(401).json({ message: "Lastname must be at least 3 characters long!" });
        }
        if(email.length < 6) { 
            return res.status(401).json({ message: "Email must be at least 6 characters long!" });
        }
        if(password.length < 6) {
            return res.status(401).json({ message: "Password must be at least 6 characters long!" });
        }

        if(!validateEmail(email)) {
            return res.status(401).json({ message: "Invalid email address!" });
        }

        //*check if user already exists
        const userExists = await userModel.find({ email });
        if(userExists.length > 0) {
            return res.status(400).json({ message: "User already exists!" });
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
        res.status(200).json({ message: "User registered successfully", user, token });
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//*Login a user
const loginUser = async (req, res) => {
    try {
        //*Check if user details are provided
        if(!req.body) {
            throw new Error("Please provide user details");
        }

        //*Add validation for the required data
        let { email, password } = req.body;
        if (!email || !password || email.trim() === "" || password.trim() === "") {
            throw new Error("All fields are required");
        }

        //*trimming email password
        email = email.trim();
        password = password.trim();

        if(email.length < 6) { 
            return res.status(401).json({ message: "Email must be at least 6 characters long!" });
        }
        if(password.length < 6) {
            return res.status(401).json({ message: "Password must be at least 6 characters long!" });
        }

        if(!validateEmail(email)) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        //*Find user by email
        const user = await userModel.findOne({ email }).select("+password");

        //*Check if user exists
        if(!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        //*Check if password is correct
        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        //*Generate token
        const token = user.generateAuthToken();

        res.cookie('token', token);

        //*send response
        res.status(200).json({ message: "User logged in successfully", user, token });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//*Get current user data
const getUserProfile = async (req, res) => {
    res.status(200).json({ message: "User profile fetched successfully", user : req.user });
}

//*Logout user 
const userLogout = async (req, res) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blacklistTokenSchema.create({ token });
    res.status(200).json({ message: "User logged out successfully" });
}

module.exports = { registerUser, loginUser, getUserProfile, userLogout };