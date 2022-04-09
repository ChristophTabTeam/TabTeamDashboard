const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const conn = require('./database')
const authRoutes = require('./routes/authRoutes')
const invoiceRoutes = require('./routes/invoiceRoutes')

const app = express()
const PORT = process.env.PORT || 4201

app.use(express.static(path.resolve(__dirname, './client/dist/client')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

authRoutes(app)
invoiceRoutes(app)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/dist/client', 'index.html'))
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
