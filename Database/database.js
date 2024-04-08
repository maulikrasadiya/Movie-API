const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/Movie').then(() => {
    console.log("Database Successfully...");
}).catch((err) => {
    console.log("Database Errer...",err);
});

module.exports = mongoose;

