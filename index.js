var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var app = express()

var token = process.env.FB_VERIFY_TOKEN
var access = process.env.FB_ACCESS_TOKEN

app.set('port',(process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.get('/', function(req,res){
	res.send('Hello world. I am a chat bot')
})

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === token) {
      res.send(req.query['hub.challenge'])
    } else {
      res.send('Error, wrong validation token')
    }
  })

app.post('/webhook/', function(req,res){
  let messaging_events = req.body.entry[0].messaging
  for (let i=0; i<messaging_events.length; i++){
    let event = req.body.entry[0].messaging[i]
  }
})

app.listen(app.get('port'),function(){
  console.log('running on port',app.get('port'))
})
