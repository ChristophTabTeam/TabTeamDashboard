const express = require('express')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 4201

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', router)

app.post('/addline', (req, res) => {
    
})

app.use(express.static(path.resolve(__dirname, './client/dist/client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist/client', 'index.html'))
})

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`))
