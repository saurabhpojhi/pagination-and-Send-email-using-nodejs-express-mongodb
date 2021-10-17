const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:'3de593b488e1c1', // generated ethereal user
      pass: '691069f67dead9', // generated ethereal password
    },
  });

//   module.exports = transporter;



// // //   Send mailer simple code

// const nodemailer = require('nodemailer');

//  const transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: '3de593b488e1c1', // generated ethereal user
//       pass: '691069f67dead9', // generated ethereal password
//     },

//     transporter.sendMail(message)

//     const message = {
//         from: "saurabh@gmail.com",
//         to: "djawaha@gmail.com",
//         subject: " we are working on nodemailer ",
//         text: " its working is very nice way ",
//         html: "<p>DJ is nice person</p>"
//       };
//   });

//   module.exports =message;

