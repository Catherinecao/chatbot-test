var express = require('express');
var bodyParser = require('body-parser');
var request = request('request');
var app = express;

app.set('post',(process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/', function(req,res){
	res.send('Hello world. I am a chat bot');
});

app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'My_Password') {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);          
  }  
});

app.listen(app.get('port'),function(){
  console.log('running on port',app.get('port'));
});

