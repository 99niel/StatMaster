const express = require('express');
const app = express();

//redirect = require("express-redirect");
//redirect(app);
//app.redirect("index1.html");

var bodyParser = require('body-parser');
app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.json')
})

app.get('/index2', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


const MongoClient = require('mongodb').MongoClient
let dbInstance;

MongoClient.connect('mongodb://test:test@ds117178.mlab.com:17178/school_db', (err, client) => {
  if (err) return console.log(err)
  dbInstance = client.db('school_db') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.post('/students_temp', (req, res) => {
  dbInstance.collection('students_temp').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/students_temp', (req, res) => {
  dbInstance.collection('students_temp').find().toArray(function (err, results) {
    results[0].age = "20";
    res.send(results);
  });
})

app.delete('/students_temp', (req, res) => {
  
  dbInstance.collection('students_temp').deleteOne({name: "Rajesh"}, 1, (err, result) => {
    console.log('removed from db')
    res.redirect('/')
  })
})

app.put('/students_temp', (req, res) => {
   dbInstance.collection('students_temp').update({id: "100"},{$set : {name : "raju123", class : "10000"}},(err, result) => {
    console.log('updated from db')
    res.redirect('/')
  });
})
