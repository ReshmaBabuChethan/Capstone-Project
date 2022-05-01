const {https} = require('firebase-functions');
const {createTransport} = require('nodemailer');


const cors = require('cors');
const corsHandler = cors({origin: true});

const {
    gmail: {
        password,
        sender
    }
} = config();

const recipient = 'reshmabjm82@gmail.com';

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: sender,
        pass: password
    }
});

const mailOptions = {
    from: sender,
    to: recipient,
    subject: 'Firebase Message',
    text: 'Working',
    html: '<h1>Working</h1>'
};

const transport = (error, {messageId}) => error ? console.log(error) : console.log(messageId);

// const handleEmail = (req, res) => {
// transporter.sendMail(mailOptions, transport);
// res.send({ status: 200 });
// };

// module.exports = https.onRequest(handleEmail);

const handleEmail = (req, res) => {
    corsHandler(req, res, () => {
        transporter.sendMail(mailOptions, transport);
    });
    res.send({status: 200});
};

module.exports = https.onRequest(handleEmail);
