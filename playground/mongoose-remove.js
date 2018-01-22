const {
    ObjectID
} = require('mongodb');


const {
    mongoose
} = require('./../server/db/mongoose');

const {
    Todo
} = require('./../server/models/todo');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5a614f108aef76c22c132118').then((todo) => {
    console.log(todo);
});