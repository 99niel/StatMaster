const express = require('express');

const mongodb = require('mongodb');

const dbLoc = 'mongodb://localhost:27017/StatMaster';

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
		var ShortListedArray = [];
		var SelectedArray = [];

		for(index in docs){
			var doc = docs[index];
			var month = doc['month'];
			var shortlisted = doc['shortlisted'];
			var selected = doc['selected'];

			monthArray.push({'label': month});
			ShortListedArray.push({'value': shortlisted});
			SelectedArray.push({'value': selected});
		}

		var response = {
			'catagories': monthArray,
			'empShortlisted': ShortListedArray,
			'empSelected': SelectedArray
		};
		responseObj.json(response);
	});
};

var app = express();

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', 'D:\StatMaster\StatMaster-branch_karthik\public\script' + '/views');
app.set('view engine', 'handlebars');

app.use('/public', express.static('public'));
app.get('/home', (req, res) => {
	getData(res);
});
app.get('/', (req, res) => {
	res.renderFile('get_chart');
});

app.listen(3000, () => {
	console.log(`Server started on http://localhost/3000`);
});