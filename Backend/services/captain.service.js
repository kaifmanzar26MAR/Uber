const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    try {
        if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
            throw new Error("Please provide all the details");
        }
        const captain = await captainModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType
            }
        });
        if(!captain) {
            throw new Error("Something went wrong in captain registration!");
        }
        return captain;
    } catch (error) {
        throw new Error(error);
    }
}