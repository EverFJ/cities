const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    department: Number,
    city: String,
    population: Number
})

module.exports = mongoose.model("City", citySchema)