var express = require('express');
const path = require('path');

var app = express();

var jsonObj = {message: "Hello json"}; 

app.use('/public',express.static(path.join(__dirname, '/public'))); //middleware per style.css

app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})
app.get('/json', (req, res) => {
  //res.setHeader('Content-Type', 'application/json'); // da verificare per impostare contenuto
  /*
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json()
  } 
  */
  //res.json({message: "Hello json"});
  res.send(jsonObj.message)
});



































 module.exports = app;
