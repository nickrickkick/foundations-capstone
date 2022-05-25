require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getUsers, createCutting, getCutting, deleteCutting} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.get('/users', getUsers)

app.post('/cutting', createCutting)
app.get('/cutting/:id', getCutting)
app.delete('/cutting/:id', deleteCutting)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))