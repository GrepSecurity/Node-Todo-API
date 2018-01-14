//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log('Connected to MongoDB server');
    // const myDB = db.db('TodoApp');
    // myDB.collection('Todos').find({
    //     _id: new ObjectID('5a5b8d2368e62dc5721f09bc')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2)); 
    // },(err)=>{
    //     console.log('Unable to fetch todos')
    // });

    const myDB = db.db('TodoApp');
    myDB.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    myDB.collection('Users').find({
        name: 'Hari'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();

});