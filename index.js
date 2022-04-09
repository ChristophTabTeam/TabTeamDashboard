const express = require('express')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const msal = require('@azure/msal-node');

const keys = require('./config')
const conn = require('./database')

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 4201
const jsonParser = bodyParser.json()

app.use(express.static(path.resolve(__dirname, './client/dist/client')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist/client', 'index.html'))
})

app.get('/getInvoice', cors(), (req, res) => {
    fs.readFile(__dirname + '/' + 'invoices.json', 'utf-8', (err, data) => {
        res.end(data)
    })
})

app.post('/postInvoice', cors(), jsonParser, (req, res) => {
    console.log(req.body)
})


app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
    conn.connect((err) => {
        if (err) {
            throw err
        } else {
            console.log('Database is connected')
        }
    })
})
