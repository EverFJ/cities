const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const db = "mongodb://localhost:27017/census"
const cities = require("./cities")
const cityModel = require("./models/cityModel")

const filteredCities = cities.map(elem => ({
    department: elem.department,
    city: elem.city,
    population: elem.population
}))

// create 
// cityModel.create(filteredCities)

// Total population by departement
// cityModel.aggregate()
//     .group({
//         _id: "$department",
//         totalPopulation: {
//             $sum: "$population"
//         }
//     })
//     .then(console.log)
//     .catch(console.error)

// Average population by department
// cityModel.aggregate()
//     .group({
//         _id: "$department",
//         avgPopulation: {
//             $avg: "$population"
//         }
//     })
//     .then(console.log)
//     .catch(console.error)

// Total and average sorted population by departement
cityModel.aggregate()
    .group({
        _id: "$department",
        totalPopulation: {
            $sum: "$population"
        },
        avgPopulation: {
            $avg: "$population"
        },
        numberOfCities: {
            $sum: 1
        }
    })
    .sort({
        population: -1
    })
    .then(console.log)
    .catch(console.error)

// Cities starting by a "P"
cityModel.aggregate()
    .match({
        city: {
            $regex: "^P",
            $options: "i"
        }
    })
    .group({
        _id: "$department",
        totalPopulation: {
            $sum: "$population"
        },
        avgPopulation: {
            $avg: "$population"
        },
        numberOfCities: {
            $sum: 1
        }
    })
    .then(console.log)
    .catch(console.error)

mongoose.connect(db)
    .then(console.log('Connected to', db))
    .catch(err => console.log(err))

app.listen(port, () => {
    console.log('Server running on port', port);
})