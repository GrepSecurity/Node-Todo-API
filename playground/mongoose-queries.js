const {
    ObjectID
} = require('mongodb');


const {
    mongoose
} = require('./../server/db/mongoose');

const {
    Todo
} = require('./../server/models/todo');


const {
    users
} = require('./../server/models/users');

var id = '5a5ebb6615cc0241d8f48ce5';

var id_user = '5a5d653ae72649212cb3fc25';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID is not valid');
    }
    console.log('Todo by ID', todo);
}).catch((e) => {
    console.log(e);
});

users.findById(id_user).then((users) => {
    if (!users) {
        return console.log('unable to find the iD');
    }
    console.log('Users ', JSON.stringify(users, undefined, 2));
}, (e) => {
    console.log(e);
});