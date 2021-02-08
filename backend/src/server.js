const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect(
    'mongodb+srv://erik:erik11@omnistack.1a3t2.mongodb.net/semana09?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
)

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(3333)