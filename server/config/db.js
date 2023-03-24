const mongooge = require('mongoose');

const connectDB = async () => {
    const conn = await mongooge.connect(process.env.MONGO_URI);

    console.log(`DB connected: ${conn.connection.host}`);
}

module.exports = connectDB;