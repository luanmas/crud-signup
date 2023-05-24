const mongoose = require("mongoose");

const MONGODB_URL = "mongodb+srv://luanzik1327:mascarenhas1327@luanmas.papfr9i.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL , {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("CONNECTED!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;