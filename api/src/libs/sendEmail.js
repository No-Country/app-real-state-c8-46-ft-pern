const nodemailer = require("nodemailer");

// TODO: nodemailer para envio de emails
// async..await is not allowed in global scope, must use a wrapper
const sendToken = async (data) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: false,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'postmaster@application.goapp.gq', // generated ethereal user
      pass: 'caa7f4e8b9752ed6c5ab95e3dd424580-69210cfc-e50ad8e5', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Myapplication!!!" <no-reply@application.goapp.gq>', // sender address
    to: `${data.email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<b>Hello ${data.name}? esto es una prueba de tu token ${data.token} </b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendToken