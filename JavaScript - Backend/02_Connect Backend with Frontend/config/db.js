
const mongoose = require("mongoose");
require("dotenv").config();

const colors = require('colors')

const { MONGODB_URL } = process.env;

exports.connect = () => {
    mongoose
        .connect(MONGODB_URL, {
            useNewUrlparser: true,
            useUnifiedTopology: true,
        })
        .then(console.log(`DB Connection Success`.bgMagenta.white))
        .catch((err) => {
            console.log(`DB Connection Failed`);
            console.log(err);
            process.exit(1);
        });
};