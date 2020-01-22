const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {host , port , user , pass } = require('../config/mail');

const transport = nodemailer.createTransport({
    host ,
    port,
    auth: {user , pass },
});

const handlebarOptions = {
    viewEngine: {
      extName: '.html',
      partialsDir: 'src',
      layoutsDir: 'src',
      defaultLayout: 'forgot_password.html',
    },
    viewPath: 'src',
    extName: '.html',
  };

transport.use('compile', hbs(
    handlebarOptions
));

module.exports = transport;
