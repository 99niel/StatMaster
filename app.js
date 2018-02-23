const express = require('express');

const mongodb = require('mongodb');

//const dbLoc = 'mongodb://localhost:27017/StatMaster';
const dbLoc = 'mongodb://_karthik:l1o2a3d48991@ds247407.mlab.com:47407/statmaster_test_name'

const path = require('path');

var dbObject;

const MongoClient = mongodb.MongoClient;

MongoClient.connect(dbLoc, (err, db) => {
	if(err) throw err;
	dbObject = db;
	
});

function getData(responseObj) {
	dbObject.collection('chartdata').find({}).toArray((err, docs) => {
		
		if(err) throw err;
		var monthArray = [];
		var shortListedArray = [];
		var selectedArray = [];

		for(index in docs){
			var doc = docs[index];
			var month = doc['month'];
			var shortlisted = doc['shortlisted'];
			var selected = doc['selected'];

			monthArray.push({'label': month});
			shortListedArray.push({'value': shortlisted});
			selectedArray.push({'value': selected});
		}
		
		var dataset = [
			{
			  "label" : "# Short listed",
			  "data" : shortListedArray
			},
			{
			  "label" : "# Hired",
			  "data": selectedArray
			}
		  ];

		var response = {
			'categories': monthArray,
			'dataset': dataset
		};
		responseObj.json(response);
	});
	
};

var app = express();

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main', layourDir: __dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/public', express.static('public'));
app.get('/home', (req, res) => {
	getData(res);
});
app.get('/', (req, res) => {
	res.render('chart');
});

app.listen(3000, () => {
	console.log(`Server started on http://localhost:3000`);
});