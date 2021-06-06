const express = require('express');
const logic = require('../logic/logic');

const route = express.Router();

// URL: http://localhost:5000/toys
// DESC: Fetch All Toys
// Method: GET
route.get('/', logic.getAll);

module.exports = route;