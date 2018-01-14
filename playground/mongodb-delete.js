const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB server');

    //delete many documents
    const myDB = db.db('TodoApp');
    myDB.collection('Todos').deleteMany({
        name: 'Charan'
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete');
    });

    //delete one
    myDB.collection('Todos').deleteOne({
        name: 'Hari Charan'
    }).then((result) => {
        console.log(result);
    }, (err) => {

    });
   // db.close();
   
});