const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()

module.exports = (app) => {
    app.get('/getInvoice', cors(), (req, res) => {
        fs.readFile(__dirname + '/' + 'invoices.json', 'utf-8', (err, data) => {
            res.end(data)
        })
    })
    
    app.post('/postInvoice', cors(), jsonParser, (req, res) => {
        console.log(req.body)
    })
}