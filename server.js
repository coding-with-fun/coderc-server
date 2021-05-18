const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const route = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}...`);
    });

    app.use(route);
});
