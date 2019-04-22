//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
// const mongoDB = 'mongodb://localhost/node_rest_api';
const mongoDB = 'mongodb+srv://curd_tester:curd_tester@curdtest-5xogh.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
/*const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/