const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    department: String,
    city: String,
    population: Number
})

module.exports = mongoose.model("City", citySchema)