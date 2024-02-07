const express = require('express');
const path = require('path')
const router = express.Router();
const nodemailer = require('nodemailer');
const { sendMail } = require('./controllers/mainController')

router.get('/', (request, response) => {
    response.render('index.ejs');
});

router.post('/', sendMail);

module.exports = router;