const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const captianSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type : String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters long'],
        },
        lastname: {
            type : String,
            minlength: [3, 'Lastname must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 3 characters long'],
        matches: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address!']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength : [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            minlength : [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "auto", "moterbike"],
        },
    },
    location: {
        lat:{
            type: Number
        },
        log:{
            type: Number
        }
    },

});

captianSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captianSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

captianSchema.pre('save', async function(next) {   
    if(!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const captainModel = mongoose.model('Captian', captianSchema);

module.exports = captainModel;