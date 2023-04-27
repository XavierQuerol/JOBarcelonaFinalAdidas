//Require Dependencies
const axios = require("axios");
const data = require('../../../datasets/data.json')

//Variables
const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
    res.send(data)
}

module.exports = indexCtrl