var mongoose = require('mongoose');
//var mla = "@ds261247.mlab.com:61247/db_todo-api";
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// var username = process.env.DB_USERNAME;
// var password = process.env.DB_PASSWORD;
// console.log(username);
// console.log(password);
// mongoose.connect("mongodb://" + username + ":" + password + mla || 'mongodb://localhost:27017/TodoApp', {
//     useMongoClient: true
// });
module.exports = {
    mongoose
};