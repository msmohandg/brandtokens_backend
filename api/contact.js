const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', (req, res, next) => {

    const mailOptions = {
        from: 'szczepanbentyn@gmail.com',
        //to: 'contact@brandtokens.io',
        to: 'msmohandg@gmail.com',
        subject: 'New inquiry!',
        text: 'Hi Team, there is a new enquiry from '+ req.body.name + '. Email: ' + req.body.email + 'company website: ' + req.body.website + 'country: ' + req.body.country + 'Note: ' + req.body.note,
        html: '<p> Hi Team, there is a new enquiry from '+ req.body.name + '. <br> Email: ' + req.body.email + ' <br>  company website:  ' + req.body.website + ' <br> country: ' + req.body.country + ' <br> Note: ' + req.body.note +' </p>'
    
    };

    sgMail.send(mailOptions);

});


router.get('/test', (req, res, next) => {

    res.status(201).json({message: 'success'});

});

module.exports = router;