const express = require('express')
const app = express()
const mongoose = require('./config/database'); //database configuration
const port = 8888
const users = require('./routes/users');
const bodyParser = require('body-parser');

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
	res.json({"tutorial" : "Build REST API with node.js"});
});


// public route
app.use('/users', users);


app.listen(process.env.PORT || 8888, () => console.log(`Example app listening on port ${port}!`));