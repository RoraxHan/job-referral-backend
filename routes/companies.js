var express = require('express');
var router = express.Router();
const { celebrate, Joi } = require('celebrate');

var controller = require('../controllers/CompanyController')
var authenticate = require('../policies/authenticate')
var checkAdmin = require('../policies/checkAdmin')

module.exports = router;
