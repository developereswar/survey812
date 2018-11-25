const express = require('express');

const path = require('path');

const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');

const user = require('./server/model/user');

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+ '/dist'));

app.listen(process.env.PORT || 8008);

app.use('/api/user', user);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '/dist/survey/')));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/survey/"));
});
