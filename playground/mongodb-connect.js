//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log('Connected to MongoDB server');
    const myDB = db.db('TodoApp');
    myDB.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));

    });


    //Insert new doc Users
    const mynewDb = db.db('TodoApp');
    
    // mynewDb.collection('Users').insertOne({
    //     name: 'Hari',
    //     age: 26,
    //     location: 'Hyderabad'
    // }, (err, res) => {
    //     if (err) {
    //         return console.log('Unable to add user');
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    db.close();

});