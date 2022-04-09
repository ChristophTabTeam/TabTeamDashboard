const msal = require('@azure/msal-node');
const keys = require('./config').msAuth

const config = {
    auth: {
        clientId: keys.clientID,
        clientSecret: keys.clientSecret
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

const cca = new msal.ConfidentialClientApplication(config);

module.exports = cca