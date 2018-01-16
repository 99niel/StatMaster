console.log('May Node be with you')
const express = require('express');
const app = express();

const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://<statmaster>:<statmaster123>@ds249707.mlab.com:49707/statmaster', (err, database) => {
	
	// ... start the server
	
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

 /*app.get('/', (req, res) => {
  var cursor = db.collection('quotes').find()
  
  db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)
  
  // send HTML file populated with quotes here
})

})*/

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
