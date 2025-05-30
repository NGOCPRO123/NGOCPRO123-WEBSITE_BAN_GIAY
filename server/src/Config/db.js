const Mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.CONNECT_DB);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

module.exports = connectDB;
