const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const conn = require('./database')
const indexRoutes = require('./routes/index')
const authRoutes = require('./routes/authRoutes')
const invoiceRoutes = require('./routes/invoiceRoutes')

const app = express()
const PORT = process.env.PORT || 4201

app.use(express.static(path.resolve(__dirname, './client/dist/client')))
app.use(flash())
app.use(session({
    secret: 'sessionsecret',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use((req, res, next) => {
    res.locals.error = req.flash('error_msg')
    var errs = req.flash('error')
    for (var i in errs){
        res.locals.error.push({message: 'An error occurred', debug: errs[i]});
    }
    if (req.session.userId) {
        res.locals.user = app.locals.users[req.session.userId];
    }
    next();
})

authRoutes(app)
invoiceRoutes(app)
indexRoutes(app)

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
