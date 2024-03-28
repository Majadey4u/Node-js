const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'maryjaneogbuju@gmail.com',
        pass: 'jane1000'
    }
});

let mailOptions = {
    from: 'maryjaneogbuju@gmail.com',
    to: 'maryjaneogbuju@yahoo.com',
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
