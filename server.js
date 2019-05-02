const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const CONENCTION_URL = "mongodb+srv://user_admin:<4mhn7lE9Okw9gOhB>@cluster0-2cu8t.mongodb.net/tes";
const DATABASE_NAME = "cafe";

let db = null;
let collection = null;
let clientCollection=null;


async function onPage(req, res) {
    const cursor = await clientCollection.find()
                                .project({ _id:0,client: 1,estado:1 ,quantity:1})
                                .sort({ client: 1 });

  const array = await cursor.toArray();
  res.render("pedidos", { array } );

}

app.get("/", onPage);


async function startServer() {
    const client = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
    db = client.db(DATABASE_NAME);
    collection = db.collection('clientes');
    clientCollection=db.collection('clientes');
    app.listen(3000);
    console.log("Server is up and running.\nOpen http://localhost:3000 to start");
}


startServer();
