var express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

var app = express();

var jsonObj = {message: "Hello json"}; 

app.use('/public',express.static(path.join(__dirname, '/public'))); //middleware per style.css
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req,res,next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`); //test loggo il method recupero method
  next();
}); //intercetta tutte le routes

app.get('/:word/echo',function(req,res){ //route GET su path /:word/echo
  res.json({echo: req.params.word}); //response in json + utilizzo la dot notation per accedere a value della key word nell'oggetto req.params
  });

app.get('/now',function (req,res,next) { //middleware function
  req.time = new Date().toString(); // ho modificato un parametro della richiesta e posso usarlo come risposta
  next()
  },function (req,res) { //final handler chained
  res.json({time: req.time})
  }
)
app.get("/",function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
    //res.sendFile(__dirname/views/index.html);
})
app.get('/json', (req, res) => {
  //res.setHeader('Content-Type', 'application/json'); // da verificare per impostare contenuto

  if (process.env.MESSAGE_STYLE == "uppercase") {
    jsonObj.message = jsonObj.message.toUpperCase();
    res.json(jsonObj);
  } 
  
  //res.json({message: "Hello json"});
  res.send(jsonObj)
});

app.route('/name') //definiamo endpoint
.post(function(req,res,next){ //route di tipo post per recuperare query parameters
	next()
})
.get(function(req,res){ //route di tipo get per rimandare json
	res.json({name: `${req.query.first} ${req.query.last}`})
})


app.route('/body') //definiamo endpoint
.bodyParser.urlencoded({extended: false})
.use(function(req,res){ //route di tipo get per rimandare json
	res.json({name: `${req.query.first} ${req.query.last}`})
})




















 module.exports = app;
