const captainModel = require('../models/captain.model');
const {createCaptain} = require('../services/captain.service');
const { validateEmail } = require("../utils/validation.utils.js");
const blacklistTokenSchema = require("../models/blacklistToken.model.js")
//*Registration of captain
const registerCaptain = async (req, res) => {
    try {
        //*checking request data
        if(!req.body) {
            throw new Error("Please provide captain details");
        }

        //*destructure the required data
        let { firstname, lastname, email, password, vehicale } = req.body;

        //*validating the data
        if (!firstname || !email || !password || firstname.trim() === "" || email.trim() === "" || password.trim() === "" || !vehicale) {
            return res.status(401).json({ message: "All fields are required!" });
        }

        //*destructuring the vehicle data
        let {color, plate, capacity, vehicleType} = vehicale;

        //*checks for vehicles
        if(!color || !plate || !capacity || !vehicleType || color.trim() === "" || plate.trim() === "" || vehicleType.trim() === "" || capacity <= 0) {
            return res.status(401).json({ message: "All fields are required for vehicle!" });
        }

        //*trim data
        firstname = firstname.trim();
        lastname = lastname.trim();
        email = email.trim();
        password = password.trim();
        color = color.trim();
        plate = plate.trim();
        vehicleType = vehicleType.trim();

        //*checking for field length
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

        //*validating email
        if(!validateEmail(email)) {
            return res.status(401).json({ message: "Invalid email address!" });
        }

        //*is captain exists check
        const captainExists = await captainModel.find({ email });
        if(captainExists.length > 0) {
            return res.status(400).json({ message: "Captain already exists!" });
        }

       //*creating captian
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

        //*checking for captian creation
        if(!captain) {
            throw new Error("Something went wrong in captain registration!");
        }

        //*Generate token
        const token = captain.generateAuthToken();

        //*setting cookies
        res.cookie("token", token);

        //*sending response
        return res.status(201).json({ message: "Captain registered successfully!", token, captain });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const loginCaptain = async (req, res, next)=>{

    try {
        if(!req.body){
            throw new Error('No data found!');
        }
    
        let {email, password} = req.body;

        if(!email || email.trim()==="" || !password || password.trim() === ""){
            throw new Error("Email and Password are required!")
        }

        //*trim data
        email = email.trim();
        password = password.trim();

        if(!validateEmail(email)){
            throw new Error("Invalid Email! Try with a valid email.");
        }

        const captain = await captainModel.findOne({email}).select("+password");
        
        if(!captain){
            return res.status(400).json({message: "Invalid Email or Password!"});
        }

        
        const validatePassword = await captain.comparePassword(password);

        if(!validatePassword){
            return res.status(400).json({message: "Invalid Email or Password!"});
        }

        const token = await captain.generateAuthToken();

        if(!token){
            throw new Error("Somehting went wrong in genrating token!");
        }

        res.cookie('token', token);
        return res.status(200).json({message: "Captain Logged In!", token, captain});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error : error.message});
    }
}

const captainProfile = async (req, res, next) =>{
    return res.status(200).json({message: "Got captain profile successfylly!", captain : req.captain});
}

const captainLogout = async (req, res, next) =>{
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await blacklistTokenSchema.create({ token });
    res.status(200).json({ message: "Captain logged out successfully" });
}
module.exports = {registerCaptain, loginCaptain, captainProfile, captainLogout};
