const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gagatu gangatu @gmail.com',
        pass: 'ghsuoieooj'
    }
});

let mailOptions = {
    from: 'nk@gmail.com',
    to: 'jhjmaoko@yahoo.com',
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
