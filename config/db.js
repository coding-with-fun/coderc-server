const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });

        console.log("Mongo DB connected successfully!!");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
