var express = require('express');
var bodyParser = require('body-parser');

var {
    ObjectID
} = require('mongodb');

var {
    mongoose
} = require('./db/mongoose')
var {
    Todo
} = require('./models/todo');
var {
    user
} = require('./models/users');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });


    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    //validate ID using isvalid
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({
            todo
        });

    }).catch((e) => {
        res.status(400).send(e);
    });

});

app.delete('/todos/:id', (req, res) => {

    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({
            todo
        }).catch((e) => {
            res.status(400).send(e);
        });
    });


});

app.listen(port, () => {
    console.log(
        `started and running on ${port}`
    );
});

module.exports = {
    app
};