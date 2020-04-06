const nodemailer = require('nodemailer');

const fromMail = 'charetheris@gmail.com';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: fromMail,
    pass: 'charetherIS4302!!'
  }
});


async function sendMail(toMail, subject, html) {
  console.log(toMail)
  transporter.sendMail({
    from: fromMail,
    to: toMail,
    subject: subject,
    html: html
  }, function(err, info) {
    if (err) {
        console.log(err)
    }
    console.log(info)
  })
}

exports.donationOutcome =  (req,res) => {
  if(!req.body.accepted && req.body.reason==undefined)
  {
    res.status(500).send("Must provide reason if rejecting donation");
    return;
  }

  var emailContent = 
  "This is regarding donation Id \""+ req.body.donationId+"\""+
  ", of amount \""+ req.body.donationAmount +"\""+
  ", for the charity project \""+req.body.project+"\". \n \n";

  if(req.body.accepted)
    emailContent = emailContent + 
    "We are happy to inform you that your donation has been accepted by us. Thank you for your support and kindness."
  else
    emailContent = emailContent + 
    "We are sad to inform you that your donation has been rejected by us for the following reason.\nReason: " +req.body.reason;
  console.log(emailContent)
  sendMail(req.body.recipientEmail, "Donation acceptance results",  emailContent);
  res.status(200).send("Email successfully sent to donor "+req.body.recipientEmail);
}