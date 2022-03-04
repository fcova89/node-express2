var express = require('express');
const path = require('path');

var app = express();

app.use('/public',express.static(path.join(__dirname, '/public'))); //middleware per style.css

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})




































 module.exports = app;
