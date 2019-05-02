const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const CONENCTION_URL = "mongodb+srv://user_admin:<4mhn7lE9Okw9gOhB>@cluster0-2cu8t.mongodb.net/tes";
const DATABASE_NAME = "cafe";

let db = null;
let collection = null;
let clientCollection=null;

app.use(express.static(__dirname + '/public'));


app.listen(3000, function () {
  console.log('server on port 3000');
});`
`
