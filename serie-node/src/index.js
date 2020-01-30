const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");

  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

//require('./app/controllers/index')(app);

require('./app/controllers/ProductController')(app);

app.listen(3001);

