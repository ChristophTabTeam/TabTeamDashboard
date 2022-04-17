const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const jsonParser = bodyParser.json()

module.exports = (app) => {
    app.get('/getInvoice', cors(), (req, res) => {
        res.sendFile(path.resolve(__dirname, '../', 'invoices.json'))
    })
    
    app.post('/postInvoice', cors(), jsonParser, (req, res) => {
        console.log(req.body)
    })
}