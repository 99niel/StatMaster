const express = require('express');

const mongodb = require('mongodb');

let Ajax = require('simple-ajax');

//const dbLoc = 'mongodb://localhost:27017/StatMaster';
const dbLoc = 'mongodb://_karthik:l1o2a3d48991@ds247407.mlab.com:47407/statmaster_test_name'

const path = require('path');

let dbObject;

const MongoClient = mongodb.MongoClient;

MongoClient.connect(dbLoc, (err, db) => {
	if(err) throw err;
	dbObject = db;
	
});

const getData = responseObj => {
	dbObject.collection('chartdata').find({}).toArray((err, docs) => {
		
		if(err) throw err;
		const monthArray = [];
		const shortListedArray = [];
		const selectedArray = [];
		const aoArray = [];
		const adArray = [];
		const otherArray = [];

		for(index in docs){
			const doc = docs[index];
			const month = doc['month'];
			const shortlisted = doc['shortlisted'];
			const selected = doc['selected'];
			const appout = doc['appout'];
			const appdev = doc['appdev'];
			const other = doc['other'];

			monthArray.push({'label': month});
			shortListedArray.push({'value': shortlisted});
			selectedArray.push({'value': selected});
			aoArray.push({'value': appout});
			adArray.push({'value': appdev});
			otherArray.push({'value':other});
		}

		const response = {
			'categories': monthArray,
			'empShort': shortListedArray,
			'empSelect': selectedArray,
			'empAO': aoArray,
			'empAD': adArray,
			'empOth': otherArray
		};
		responseObj.json(response);
	});
	
};

const app = express();

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main', layourDir: __dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.static('views/images'));
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