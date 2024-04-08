const mongoose = require("mongoose");


var movieSchema = new mongoose.Schema({

    name: String,
    description: String,
    lang: String,
    rating: String,
    quality: String,
    image: String

})

const userModel = mongoose.model('MovieName' , movieSchema);

module.exports = userModel; 