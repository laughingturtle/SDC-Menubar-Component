const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'menu-bar-data';
const client = new MongoClient(url, { useNewUrlParser: true });

module.exports.client = client;