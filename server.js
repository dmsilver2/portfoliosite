const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// send mail with defined transport object
app.post("/api/send", function(req, res){
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'dmsilver2@gmail.com',
          pass: 'secret'
      },
      tls: { rejectUnauthorized: false }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      to: 'dmsilver2@gmail.com', // list of receivers
      from: 'dmsilver2@gmail.com'
  };
  let message = 'Name: ' + req.body.name +'\n' +
                'Email: ' + req.body.email +'\n' +
                'Phone: ' + req.body.phone +'\n' +
                'Message: ' + req.body.message;
  mailOptions.text = message;
  mailOptions.subject = "Sent from Portfolio Website";
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.sendStatus(200);
});

var server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
