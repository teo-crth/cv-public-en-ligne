const { response } = require('express');
const nodemailer = require('nodemailer');

const mainController = {
    sendMail: (request, response) => {
        const from = request.body.email;
        const to = 'teoconrath@gmail.com';
        const objet = request.body.objet;
        const message = request.body.message;
      
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'teoconrath@gmail.com', 
            pass: 'qlst qhsa mizc fbju'
          }
        });
    
        const mailOptions = {
          from: from,
          to: to,
          subject: objet,
          text: message
        }
        
        transporter.sendMail(mailOptions, function(error, info) {
          if(error){
            console.log(error)
          } else {
            console.log('Email send: ' + info.response)
          }
          response.redirect('/');
        });
    
      }
}

module.exports = mainController;