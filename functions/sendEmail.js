const {https, config} = require('firebase-functions');
const {createTransport} = require('nodemailer');


const cors = require('cors');
const corsHandler = cors({origin: true});

const {
    gmail: {  password,sender }
} = config();

const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: sender,
        pass: password
    }
});


const mailOptions = ({subject, name, message, recipient}) => {
    const text = `
    Name: ${name}
    Message: ${message}
    `;

    const html = `
    <h3>Hello ${name}</h3>
    <p>Message: ${message}</p>
    `;

    return {
        from: sender,
        to: recipient,
        subject,
        text,
        html
    };
};


const transport = (error, {messageId}) => error ? console.log(error) : console.log(messageId);

const handleEmail = (req, res) => {
    corsHandler(req, res, () => {
        transporter.sendMail(mailOptions(req.query), transport);
    });
    res.send({status: 200});
};

module.exports = https.onRequest(handleEmail);
