// require mongoose package
const mongoose = require('mongoose')

if(process.env.NODE_ENV === 'development'){
  // mongoose config
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/mernAuth'
  
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  
  const db = mongoose.connection;
  
  // db methods for debug
  db.once('open', () => {
    console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
  })
  
  db.on('error', err => {
    console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
  })
} else {
  // mongoDB Atlas code here
  const MongoClient = require('mongodb').MongoClient;

  const uri = process.env.ATLAS_URI

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

  // connect to orm
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  
  const db = mongoose.connection;
  
  // db methods for debug
  db.once('open', () => {
    console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
  })
  
  db.on('error', err => {
    console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
  })  
}
// console.dir
// console.log
// console == object with function in it
// console.log(console)

// escape character
// \n -- creates a new line