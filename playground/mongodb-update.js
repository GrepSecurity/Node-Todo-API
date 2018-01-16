const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        console.log('Unable to connect to Server');
    }
    const myDB = db.db('TodoApp');
    myDB.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5a5bacc568e62dc5721f0f60")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    });

});