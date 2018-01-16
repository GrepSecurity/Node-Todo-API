var mongoose = require('mongoose');

var users = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
    }
});

module.exports = {users};