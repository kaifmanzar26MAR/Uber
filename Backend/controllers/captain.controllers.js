const captainModel = require('../models/captain.model');
const {createCaptain} = require('../services/captain.service');
const { validateEmail } = require("../utils/validation.utils.js");
const registerCaptain = async (req, res) => {
    try {
        if(!req.body) {
            throw new Error("Please provide captain details");
        }

        const { firstname, lastname, email, password, vehicale } = req.body;
        if (!firstname || !email || !password || firstname.trim() === "" || email.trim() === "" || password.trim() === "" || !vehicale) {
            return res.status(401).json({ message: "All fields are required!" });
        }

        const {color, plate, capacity, vehicleType} = vehicale;

        if(!color || !plate || !capacity || !vehicleType || color.trim() === "" || plate.trim() === "" || vehicleType.trim() === "" || capacity <= 0) {
            return res.status(401).json({ message: "All fields are required for vehicle!" });
        }

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
        if(color.length < 3) {  
            return res.status(401).json({ message: "Color must be at least 3 characters long!" });
        }
        if(plate.length < 3) {
            return res.status(401).json({ message: "Plate must be at least 3 characters long!" });
        }

        if(!validateEmail(email)) {
            return res.status(401).json({ message: "Invalid email address!" });
        }

        const captainExists = await captainModel.find({ email });
        if(captainExists.length > 0) {
            return res.status(400).json({ message: "Captain already exists!" });
        }

       const captain = await createCaptain({
            firstname,
            lastname,
            email,
            password,
            color,
            plate,
            capacity,
            vehicleType
        });

        if(!captain) {
            throw new Error("Something went wrong in captain registration!");
        }

        //*Generate token
        const token = captain.generateAuthToken();

        return res.status(201).json({ message: "Captain registered successfully!", token, captain });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {registerCaptain};
