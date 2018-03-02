const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

//const MongoClient = require('mongodb').MongoClient;

const MongoClient = require('mongodb').MongoClient
let dbInstance;

const port = process.env.PORT || 3000;

global.__base = __dirname + '/';

const app = express();

//logging function

const logger = (req, res, next) => {
	console.log('Rendering graph...');
	next();
}
app.use(logger);

//Middleware

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

//Mongo test
//MongoShell-> mongo ds247407.mlab.com:47407/statmaster_test_name -u <dbuser> -p <dbpassword>
//URI -> mongodb://<dbuser>:<dbpassword>@ds247407.mlab.com:47407/statmaster_test_name

app.use(bodyParser.urlencoded({extended: true}));

app.post('/name', (req, res) => {
	db.collection('name').save(req.body, (err, result) => {
		if (err) return console.log(err);

		console.log(result + 'is saved to database');
		 res.redirect('/');
	});
});

MongoClient.connect('mongodb://statmaster:statmaster@ds151908.mlab.com:51908/statmaster', (err, database) => {
	if (err) return console.log(err);
	dbInstance = client.db('statmaster') // whatever your database name is
	app.listen(3000, () => {
		console.log('running at 3000');
	});
});

//Templating

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	db.collection('name').find().toArray((err, results) => {
		if (err) return console.log(err);

		res.render('index.html', {name: result});
	});
});

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

//res.render(view, locals);

/*app.listen(port);
console.log('Server running at 3000...')*/