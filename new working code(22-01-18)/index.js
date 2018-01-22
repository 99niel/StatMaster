var express = require('express');
var app = express();
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser')
//const db = client.db(dbName);

const url = 'mongodb://localhost:27017'

const dbName = 'myproject';

app.use(bodyParser.json())

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({a:1}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs[0].a)
        callback(docs);
    });
}

app.get('/', function(req, res) {
    // Use connect method to connect to the server
    mongoClient.connect(url, function(err, client) {
        // assert.equal(null, err);
        if(err) {
            console.log(err)
        }
        // console.log("Connected successfully to server");

        const db = client.db(dbName);

        findDocuments(db, function(data) {
            console.log('datda')
            res.send(data)
            client.close();
        });

        // insertDocuments(db, function() {

        // });
    });
})

app.listen(8000, function() {
    console.log('Example app on port 8000')
})