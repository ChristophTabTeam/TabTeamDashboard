const cca = require('../msauth')
const conn = require('../database')

module.exports = (app) => {
    app.get('/login', (req, res) => {
        const authCodeUrlParameters = {
            scopes: ["user.read"],
            redirectUri: "http://localhost:4201/login/redirect",
        };
        cca.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
            res.redirect(response);
        }).catch((error) => console.log(JSON.stringify(error)));
    });

    app.get('/login/redirect', (req, res) => {
        const tokenRequest = {
            code: req.query.code,
            scopes: ["user.read"],
            redirectUri: "http://localhost:4201/login/redirect",
        };
        cca.acquireTokenByCode(tokenRequest).then((response) => {
            var accId = response.uniqueId
            var accName = response.account.name
            var accEmail = response.account.username
            var sessData = req.session
            sessData.accessToken = response.accessToken
            var sql = "INSERT INTO users (acc_id, acc_name, acc_email) VALUES ('"+accId+"', '"+accName+"', '"+accEmail+"')"
            conn.query(sql, (err, result) => {
                if (err) {
                    throw err
                } else {
                    res.redirect('/')
                }
            })
        }).catch((error) => {
            console.log(error);
            res.status(500).send(error);
        });
    });
}