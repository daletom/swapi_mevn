require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

app.use(cors({origin: 'http://localhost:8081'}));

mongoose.connect(process.env.MONDGODB_URI || `mongodb://localhost:27017/swapi`, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const swapiRouter = require('./routes/swapis')
app.use('/swapi', swapiRouter)
/*app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})*/

//app.listen(3000, () => console.log('server started'))
const port = process.env.PORT || 3000;

app.listenerCount(port);