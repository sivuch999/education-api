const functions = require("firebase-functions");
const fs = require(`fs`);
const path = require(`path`);
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const app = express();

if (process.env.FUNCTIONS_EMULATOR) { process.env.NODE_ENV = "development"; }
else { process.env.NODE_ENV = functions.config().node.env; }
const configs = require('./app/configs')[process.env.NODE_ENV];
const models = require(`./app/models`)(fs, path, Sequelize, configs);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', (req, res, next) => { req.configs = configs; req.models = models; next(); }, require('./app/routes'));

if (process.env.FUNCTIONS_EMULATOR) {
    if (process.env.FUNCTIONS_EMULATOR == "true") {
        exports.app = functions.https.onRequest(app);
    } else {
        app.listen(configs.port, () => console.log(`${configs.name}: ${configs.port}`));
    }
} else { exports.app = functions.https.onRequest(app); }