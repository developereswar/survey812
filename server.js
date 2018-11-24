const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname+ '/dist'));

app.listen(process.env.PORT || 8000);

// app.get('/*',(req, res) => {
//     res.sendFile(path.join(__dirname + 'dist/survey/index.html'))
// })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/survey/index.html'))
})