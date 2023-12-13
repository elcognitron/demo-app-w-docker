let fs = require('fs');
let path = require('path');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/login-info', function (req, res) {
    var username = req.body.userName;
    var password = req.body.passWord;
    
    res.send('User information for ' + username + ' submitted successfully.');
});

app.listen(port, function () {
    console.log(`App listening on https://localhost:${port}!`);
});
  
