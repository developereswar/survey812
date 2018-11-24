const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname+ '/dist'));

app.listen(process.env.PORT || 8008);

app.use(express.static(path.join(__dirname, '/dist/survey/')));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/survey/"));
});