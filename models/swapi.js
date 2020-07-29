const mongoose = require('mongoose')

const swapiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    episode_id: {
        type: Number,
        required: true
    },
    opening_crawl: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    /*characters: Array,
    planets: Array,
    starships: Array,
    vehicles: Array,
    species: Array,
    url: String,*/
    image_url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Swapi', swapiSchema)