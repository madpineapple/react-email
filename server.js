const express = require("express");
const bodyParser=require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer=require('nodemailer');

const app = express();

app.get('/api/mailend', (req, res)=>{
    const mail='mail stuff';
    res.json(mail);
});

const port = 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

