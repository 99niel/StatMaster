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

MongoClient.connect('mongodb://statmaster:statmaster@ds151908.mlab.com:51908/statmaster', (err, client) => {
	if (err) return console.log(err)
	dbInstance = client.db('statmaster') // whatever your database name is
	app.listen(3000, () => {
		console.log('running at 3000');
	})
})

//MongoClient.connect('mongodb://test:test@ds117178.mlab.com:17178/school_db', (err, client) => {
  //if (err) return console.log(err)
  //dbInstance = client.db('school_db') // whatever your database name is
  //app.listen(3000, () => {
    //console.log('listening on 3000')
  //})
//})

//Templating

app.set('view engine', 'ejs');

app.get('/monthsy', (req, res) => {
  dbInstance.collection('monthsy').find().toArray(function (err, results) {
    //results[0];
    res.send(results[0]);
    console.log("working")
  });
})

app.post('/statmaster', (req, res) => {
  dbInstance.collection('statmaster').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.delete('/statmaster', (req, res) => {
  
  dbInstance.collection('statmaster').deleteOne({name: "Rajesh"}, 1, (err, result) => {
    console.log('removed from db')
    res.redirect('/')
  })
})

app.put('/statmaster', (req, res) => {
   dbInstance.collection('statmaster').update({id: "100"},{$set : {name : "raju123", class : "10000"}},(err, result) => {
    console.log('updated from db')
    res.redirect('/')
  });
})

//res.render(view, locals);

/*app.listen(port);
console.log('Server running at 3000...')*/