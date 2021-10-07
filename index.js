const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const db = "mongodb://localhost:27017/census"
const cities = require("./cities")

mongoose.connect(db)
    .then(console.log('Connected to', db))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log('Server running on port', port);
})