const express = require('express')
const router = express.Router()
const Swapi = require('../models/swapi')

// Get all Star Wars objects
router.get('/', async (req, res) => {
    try {
      const swapis = await Swapi.find()
      res.json(swapis)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })

// Get one Star Wars object
router.get('/:id', getSwapi, (req, res) => {
    res.json(res.swapi)
})

// Create one Star Wars object
router.post('/', async (req, res) => {
    const swapi = new Swapi({
        title: req.body.title,
        episode_id: req.body.episode_id,
        opening_crawl: req.body.opening_crawl,
        director: req.body.director,
        producer: req.body.producer,
        release_date: req.body.release_date,
        image_url: req.body.image_url
    })
  
    try {
      const newSwapi = await swapi.save()
      res.status(201).json(newSwapi)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// Update one Star Wars object
router.patch('/:id', getSwapi, async (req, res) => {
    if (req.body.title != null) {
        res.swapi.title = req.body.title
    }

    if (req.body.episode_id != null) {
        res.swapi.episode_id = req.body.episode_id
    }

    if (req.body.opening_crawl != null) {
        res.swapi.opening_crawl = req.body.opening_crawl
    }

    if (req.body.director != null) {
        res.swapi.director = req.body.director
    }

    if (req.body.producer != null) {
        res.swapi.producer = req.body.producer
    }

    if (req.body.release_date != null) {
        res.swapi.release_date = req.body.release_date
    }

    if (req.body.image_url != null) {
        res.swapi.image_url = req.body.image_url
    }
    try {
        const updatedSwapi = await res.swapi.save()
        res.json(updatedSwapi)
    } catch {
        res.status(400).json({ message: err.message })
    }
    
})

// Delete one Star Wars object
router.delete('/:id', getSwapi, async (req, res) => {
    try {
        await res.swapi.remove()
        res.json({ message: 'Deleted this Star Wars object' })
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
})

async function getSwapi(req, res, next) {
    try {
      swapi = await Swapi.findById(req.params.id)
      if (swapi == null) {
        return res.status(404).json({ message: 'Cant find Star Wars Object'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.swapi = swapi
    next()
  }

module.exports = router